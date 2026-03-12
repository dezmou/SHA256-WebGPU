import * as t from "https://deno.land/std/testing/asserts.ts";
import { sha256 } from "./sha256.js";
import { SHA256 } from "https://code4fukui.github.io/SHA256/SHA256.js";
import { Base16 } from "https://code4fukui.github.io/Base16/Base16.js";

Deno.test("simple", async () => {
  const input = "abc";
  const res1 = await sha256(input);
  //const res1 = "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad";
  const res2 = Base16.encode(await SHA256.digest(input));
  t.assertEquals(res1, res2);
});
