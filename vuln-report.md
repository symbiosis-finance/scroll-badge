# Vulnerability Report

**Scan date:** 2026-05-21  
**Ecosystem:** npm  

## Summary

| Metric | Count |
|--------|-------|
| Pre-patch vulnerable (package, version) instances | 23 |
| Post-patch vulnerable instances | 6 |
| **Resolved** | **17** |

## Manifest Changes

```
```

## Remaining Vulnerabilities

| Package | Version | Severity | Advisory IDs |
|---------|---------|----------|-------------|
| cookie | 0.4.2 | LOW | GHSA-pxg6-pf52-xh8x |
| elliptic | 6.6.1 | LOW | GHSA-848j-6mx2-7j84 |
| serialize-javascript | 6.0.2 | HIGH | GHSA-5c6j-r48x-rmvq, GHSA-qj8w-gfj5-8c6v |
| tmp | 0.0.33 | LOW | GHSA-52f5-9888-hmc6 |
| undici | 5.29.0 | HIGH | GHSA-2mjp-6q6p-2qxm, GHSA-4992-7rv2-5pvq, GHSA-g9mf-h72j-4rw9 |
| ws | 8.17.1 | MODERATE | GHSA-58qx-3vcg-4xpx |

## Escalations

### base-x@3.0.10 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.base-x = "3.0.11"`

### bn.js@5.2.1 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.bn.js = "5.2.3"`

### brace-expansion@1.1.11 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.brace-expansion = "2.0.3"`

### cipher-base@1.0.4 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.cipher-base = "1.0.5"`

### cookie@0.4.2 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.cookie = "0.7.0"`

### diff@5.2.0 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.diff = "5.2.2"`

### elliptic@6.5.4 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.elliptic = "6.6.1"`

### follow-redirects@1.15.6 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.follow-redirects = "1.16.0"`

### immutable@4.3.7 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.immutable = "4.3.8"`

### js-yaml@4.1.0 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.js-yaml = "4.1.1"`

### lodash@4.17.23 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.lodash = "4.18.0"`

### minimatch@3.1.2 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.minimatch = "5.1.8"`

### pbkdf2@3.1.2 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.pbkdf2 = "3.1.3"`

### picomatch@2.3.1 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.picomatch = "2.3.2"`

### secp256k1@4.0.3 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.secp256k1 = "4.0.4"`

### serialize-javascript@6.0.2 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.serialize-javascript = "7.0.5"`

### sha.js@2.4.11 (CRITICAL)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.sha.js = "2.4.12"`

### tmp@0.0.33 (LOW)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.tmp = "0.2.4"`

### undici@5.28.4 (HIGH)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.undici = "6.24.0"`

### ws@8.17.1 (MODERATE)
- **Path:** unknown
- **Why no fix:** Could not trace to a direct manifest ancestor
- **Override recipe:** `overrides.ws = "8.20.1"`

