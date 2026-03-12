import { sha256 } from "./sha256.js";

const input = "abc";
const result = await sha256(input);
console.log(result);
