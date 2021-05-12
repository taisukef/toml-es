import { TOML } from "./TOML.js";

const a = { name: "joe", age: 20 };
const s = TOML.dump(a);
console.log(s);
const a2 = TOML.parse(s);
console.log(a2);
