# SHA-256 WebGPU
## Implementation of sha-256 hash using WGSL compute shader.

# [DEMO](https://sha256.modez.pro/)

## usage

```js
import { sha256 } from "./sha256.js";

const input = "abc";
const result = await sha256(input);
console.log(result); // ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```
