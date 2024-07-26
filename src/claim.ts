import { ethers } from "ethers";
import { EIP712Proxy } from "@ethereum-attestation-service/eas-sdk/dist/eip712-proxy";
import {
  EIP712AttestationProxyParams,
  NO_EXPIRATION,
  SchemaEncoder,
  ZERO_BYTES32,
} from "@ethereum-attestation-service/eas-sdk";

require("dotenv").config();

const SCROLL_RPC = "https://rpc.scroll.io";
const SCROLL_CHAIN_ID = 534352;

const SCROLL_BADGE_SCHEMA_UID =
  "0xd57de4f41c3d3cc855eadef68f98c0d4edd22d57161d96b7c06d2f4336cc3b49";
const SCROLL_BADGE_SCHEMA = "address badge, bytes payload";

const BADGE = {
  address: process.env.BADGE_ADDRESS,
  proxy: process.env.BADGE_PROXY_ADDRESS,
};
console.log({ BADGE })

const provider = new ethers.JsonRpcProvider(SCROLL_RPC, SCROLL_CHAIN_ID);

const attesterWallet = new ethers.Wallet(process.env.ATTESTER_PRIVATE_KEY).connect(provider);
const recipientWallet = new ethers.Wallet(process.env.RECIPIENT_PRIVATE_KEY).connect(provider);

console.log({
  attester: attesterWallet.address,
  recipient: recipientWallet.address,
})

async function createAttestation({
  schema,
  recipient,
  data,
  deadline,
  proxy,
  signer,
}) {
  // keccak256("Attest(address attester,bytes32 schema,address recipient,uint64 expirationTime,bool revocable,bytes32 refUID,bytes data,uint256 value,uint64 deadline)")
  const attestation: EIP712AttestationProxyParams = {
    schema,
    recipient,
    expirationTime: NO_EXPIRATION,
    revocable: true,
    refUID: ZERO_BYTES32,
    data,
    value: 0n,
    deadline,
  };

  // sign
  const delegatedProxy = await proxy.connect(signer).getDelegated();
  const signature = await delegatedProxy.signDelegatedProxyAttestation(
    attestation,
    signer,
  );

  return {
    schema: attestation.schema,
    data: {
      recipient: attestation.recipient,
      expirationTime: attestation.expirationTime,
      revocable: attestation.revocable,
      refUID: attestation.refUID,
      data: attestation.data,
      value: attestation.value,
    },
    signature: signature.signature,
    attester: signer.address,
    deadline: attestation.deadline,
  };
}

async function createBadge({
  badge,
  recipient,
  payload,
  proxy,
  signer,
}) {
  const encoder = new SchemaEncoder(SCROLL_BADGE_SCHEMA);
  const data = encoder.encodeData([
    { name: "badge", value: badge, type: "address" },
    { name: "payload", value: payload, type: "bytes" },
  ]);

  const currentTime = Math.floor(new Date().getTime() / 1000);
  const deadline = currentTime + 3600;

  return createAttestation({
    schema: SCROLL_BADGE_SCHEMA_UID,
    recipient,
    data,
    deadline,
    proxy,
    signer,
  });
}

(async () => {
  const proxy = new EIP712Proxy(BADGE.proxy);

  const attestation = await createBadge({
    badge: BADGE.address,
    recipient: recipientWallet.address,
    payload: "0x",
    proxy,
    signer: attesterWallet,
  });

  console.log({ attestation });

  const tx =
    await proxy.contract.attestByDelegation.populateTransaction(attestation);

  const response = await recipientWallet.sendTransaction(tx);
  console.log({ response });

  return { code: 1, message: "success", tx };
})();
