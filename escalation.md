# Escalation Report — Vulnerabilities Without Clean Fix Paths

**Date:** 2026-05-21

The following packages cannot be patched by bumping a manifest entry alone.
Overrides would mechanically resolve them but were NOT applied automatically.
Review each item and decide whether to apply the suggested override.

---

## Item 1 — base-x (HIGH)

| Field | Value |
|-------|-------|
| Package | `base-x@3.0.10` |
| Severity | HIGH |
| Advisory IDs | GHSA-xq7p-g2vc-g82p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.base-x = "3.0.11"` |

- **GHSA-xq7p-g2vc-g82p**: Homograph attack allows Unicode lookalike characters to bypass validation.

## Item 2 — bn.js (MODERATE)

| Field | Value |
|-------|-------|
| Package | `bn.js@5.2.1` |
| Severity | MODERATE |
| Advisory IDs | GHSA-378v-28hj-76wf |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.bn.js = "5.2.3"` |

- **GHSA-378v-28hj-76wf**: bn.js affected by an infinite loop

## Item 3 — brace-expansion (MODERATE)

| Field | Value |
|-------|-------|
| Package | `brace-expansion@1.1.11` |
| Severity | MODERATE |
| Advisory IDs | GHSA-v6h2-p8h4-qcjw, GHSA-f886-m6hf-6m8v |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.brace-expansion = "2.0.3"` |

- **GHSA-v6h2-p8h4-qcjw**: brace-expansion Regular Expression Denial of Service vulnerability
- **GHSA-f886-m6hf-6m8v**: brace-expansion: Zero-step sequence causes process hang and memory exhaustion

## Item 4 — cipher-base (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `cipher-base@1.0.4` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-cpq7-6gpm-g9rc |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.cipher-base = "1.0.5"` |

- **GHSA-cpq7-6gpm-g9rc**: cipher-base is missing type checks, leading to hash rewind and passing on crafted data

## Item 5 — cookie (LOW)

| Field | Value |
|-------|-------|
| Package | `cookie@0.4.2` |
| Severity | LOW |
| Advisory IDs | GHSA-pxg6-pf52-xh8x |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.cookie = "0.7.0"` |

- **GHSA-pxg6-pf52-xh8x**: cookie accepts cookie name, path, and domain with out of bounds characters

## Item 6 — diff (LOW)

| Field | Value |
|-------|-------|
| Package | `diff@5.2.0` |
| Severity | LOW |
| Advisory IDs | GHSA-73rr-hh4g-fpgx |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.diff = "5.2.2"` |

- **GHSA-73rr-hh4g-fpgx**: jsdiff has a Denial of Service vulnerability in parsePatch and applyPatch

## Item 7 — elliptic (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `elliptic@6.5.4` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-434g-2637-qmqr, GHSA-49q7-c7j4-3p7m, GHSA-f7q4-pwc6-w24p, GHSA-vjh7-7g9h-fjfh, GHSA-fc9h-whq2-v747 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.elliptic = "6.6.1"` |

- **GHSA-434g-2637-qmqr**: Elliptic's verify function omits uniqueness validation
- **GHSA-49q7-c7j4-3p7m**: Elliptic allows BER-encoded signatures
- **GHSA-f7q4-pwc6-w24p**: Elliptic's EDDSA missing signature length check

## Item 8 — follow-redirects (MODERATE)

| Field | Value |
|-------|-------|
| Package | `follow-redirects@1.15.6` |
| Severity | MODERATE |
| Advisory IDs | GHSA-r4q5-vmmm-2653 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.follow-redirects = "1.16.0"` |

- **GHSA-r4q5-vmmm-2653**: follow-redirects leaks Custom Authentication Headers to Cross-Domain Redirect Targets

## Item 9 — immutable (HIGH)

| Field | Value |
|-------|-------|
| Package | `immutable@4.3.7` |
| Severity | HIGH |
| Advisory IDs | GHSA-wf6x-7x77-mvgw |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.immutable = "4.3.8"` |

- **GHSA-wf6x-7x77-mvgw**: Immutable is vulnerable to Prototype Pollution

## Item 10 — js-yaml (MODERATE)

| Field | Value |
|-------|-------|
| Package | `js-yaml@4.1.0` |
| Severity | MODERATE |
| Advisory IDs | GHSA-mh29-5h37-fv8m |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.js-yaml = "4.1.1"` |

- **GHSA-mh29-5h37-fv8m**: js-yaml has prototype pollution in merge (<<)

## Item 11 — lodash (HIGH)

| Field | Value |
|-------|-------|
| Package | `lodash@4.17.23` |
| Severity | HIGH |
| Advisory IDs | GHSA-f23m-r3pf-42rh, GHSA-r5fr-rjxr-66jc |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.lodash = "4.18.0"` |

- **GHSA-f23m-r3pf-42rh**: lodash vulnerable to Prototype Pollution via array path bypass in `_.unset` and `_.omit`
- **GHSA-r5fr-rjxr-66jc**: lodash vulnerable to Code Injection via `_.template` imports key names

## Item 12 — minimatch (HIGH)

| Field | Value |
|-------|-------|
| Package | `minimatch@3.1.2` |
| Severity | HIGH |
| Advisory IDs | GHSA-3ppc-4f35-3m26, GHSA-23c5-xmqv-rm74, GHSA-7r86-cg39-jmmj |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.minimatch = "5.1.8"` |

- **GHSA-3ppc-4f35-3m26**: minimatch has a ReDoS via repeated wildcards with non-matching literal in pattern
- **GHSA-23c5-xmqv-rm74**: minimatch ReDoS: nested *() extglobs generate catastrophically backtracking regular expressions
- **GHSA-7r86-cg39-jmmj**: minimatch has ReDoS: matchOne() combinatorial backtracking via multiple non-adjacent GLOBSTAR segmen

## Item 13 — pbkdf2 (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `pbkdf2@3.1.2` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-v62p-rq8g-8h59, GHSA-h7cp-r72f-jxh6 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.pbkdf2 = "3.1.3"` |

- **GHSA-v62p-rq8g-8h59**: pbkdf2 silently disregards Uint8Array input, returning static keys
- **GHSA-h7cp-r72f-jxh6**: pbkdf2 returns predictable uninitialized/zero-filled memory for non-normalized or unimplemented algo

## Item 14 — picomatch (HIGH)

| Field | Value |
|-------|-------|
| Package | `picomatch@2.3.1` |
| Severity | HIGH |
| Advisory IDs | GHSA-c2c7-rcm5-vvqj, GHSA-3v7f-55p6-f55p |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.picomatch = "2.3.2"` |

- **GHSA-c2c7-rcm5-vvqj**: Picomatch has a ReDoS vulnerability via extglob quantifiers
- **GHSA-3v7f-55p6-f55p**: Picomatch: Method Injection in POSIX Character Classes causes incorrect Glob Matching

## Item 15 — secp256k1 (HIGH)

| Field | Value |
|-------|-------|
| Package | `secp256k1@4.0.3` |
| Severity | HIGH |
| Advisory IDs | GHSA-584q-6j8j-r5pm |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.secp256k1 = "4.0.4"` |

- **GHSA-584q-6j8j-r5pm**: secp256k1-node allows private key extraction over ECDH

## Item 16 — serialize-javascript (HIGH)

| Field | Value |
|-------|-------|
| Package | `serialize-javascript@6.0.2` |
| Severity | HIGH |
| Advisory IDs | GHSA-qj8w-gfj5-8c6v, GHSA-5c6j-r48x-rmvq |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.serialize-javascript = "7.0.5"` |

- **GHSA-qj8w-gfj5-8c6v**: Serialize JavaScript has CPU Exhaustion Denial of Service via crafted array-like objects
- **GHSA-5c6j-r48x-rmvq**: Serialize JavaScript is Vulnerable to RCE via RegExp.flags and Date.prototype.toISOString()

## Item 17 — sha.js (CRITICAL)

| Field | Value |
|-------|-------|
| Package | `sha.js@2.4.11` |
| Severity | CRITICAL |
| Advisory IDs | GHSA-95m3-7q98-8xr5 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.sha.js = "2.4.12"` |

- **GHSA-95m3-7q98-8xr5**: sha.js is missing type checks leading to hash rewind and passing on crafted data

## Item 18 — tmp (LOW)

| Field | Value |
|-------|-------|
| Package | `tmp@0.0.33` |
| Severity | LOW |
| Advisory IDs | GHSA-52f5-9888-hmc6 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.tmp = "0.2.4"` |

- **GHSA-52f5-9888-hmc6**: tmp allows arbitrary temporary file / directory write via symbolic link `dir` parameter

## Item 19 — undici (HIGH)

| Field | Value |
|-------|-------|
| Package | `undici@5.28.4` |
| Severity | HIGH |
| Advisory IDs | GHSA-vrm6-8vpv-qv8q, GHSA-2mjp-6q6p-2qxm, GHSA-v9p9-hfj2-hcw8, GHSA-4992-7rv2-5pvq, GHSA-cxrh-j4jr-qwg3 |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.undici = "6.24.0"` |

- **GHSA-vrm6-8vpv-qv8q**: Undici has Unbounded Memory Consumption in WebSocket permessage-deflate Decompression
- **GHSA-2mjp-6q6p-2qxm**: Undici has an HTTP Request/Response Smuggling issue
- **GHSA-v9p9-hfj2-hcw8**: Undici has Unhandled Exception in WebSocket Client Due to Invalid server_max_window_bits Validation

## Item 20 — ws (MODERATE)

| Field | Value |
|-------|-------|
| Package | `ws@8.17.1` |
| Severity | MODERATE |
| Advisory IDs | GHSA-58qx-3vcg-4xpx |
| Dep path | unknown |
| Why no clean fix | Could not trace to a direct manifest ancestor |
| Override recipe | `overrides.ws = "8.20.1"` |

- **GHSA-58qx-3vcg-4xpx**: ws: Uninitialized memory disclosure

---

## Decision Required

For the items above, the only mechanical fix is an override.
Reply with package names or advisory IDs to override, or 'none' to leave them unresolved.
