import * as t from "https://deno.land/std/testing/asserts.ts";
import { TOML } from "../TOML.js";

Deno.test("array", () => {
  const a = [{ name: "joe", age: 20n }, { name: "kate", age: 21n }];
  const s = TOML.stringify(a);
  const a2 = TOML.parse(s);
  t.assertEquals(a, a2);
});
