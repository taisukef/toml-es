//import { TOML } from "https://js.sabae.cc/TOML.js";
import { TOML } from "https://taisukef.github.io/toml-js/es/TOML.js";

const a = { name: "joe", age: 20 };
const s = TOML.dump(a);
console.log(s);
const a2 = TOML.parse(s);
console.log(a2);
