import { TOML } from "../TOML.js";

const a = [{ name: "joe", age: 20 }, { name: "kate", age: 21 }];
const s = TOML.stringify(a);
console.log(s);
const a2 = TOML.parse(s);
console.log(a2);
