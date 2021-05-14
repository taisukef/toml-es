import * as t from "https://deno.land/std/testing/asserts.ts";
import { TOML } from "../TOML.js";
import { parseURL } from "https://code4sabae.github.io/js/parseURL.js";
const { dirname } = parseURL(import.meta.url);

//return (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/).test(value);

Deno.test("simple", () => {
  t.assertEquals(TOML.parse("a=123"), { a: 123n });
});
Deno.test("date", () => {
  t.assertEquals(TOML.parse("date = 1979-05-27T07:32:00Z"), {
    date: new Date("1979-05-27T07:32:00.000Z"),
  });
});
Deno.test("data", async () => {
  const s = await Deno.readTextFile(dirname + "example.toml");
  const d = TOML.parse(s);
  const chk = {
    title: "TOML Example",
    owner: {
      name: "Tom Preston-Werner",
      organization: "GitHub",
      bio: "GitHub Cofounder & CEO\nLikes tater tots and beer.",
      dob: new Date("1979-05-27T07:32:00.000Z"),
    },
    database: {
      server: "192.168.1.1",
      ports: [8001n, 8001n, 8002n],
      connection_max: 5000n,
      enabled: true,
    },
    servers: {
      alpha: { ip: "10.0.0.1", dc: "eqdc10" },
      beta: { ip: "10.0.0.2", dc: "eqdc10" },
    },
    clients: {
      data: [["gamma", "delta"], [1n, 2n]],
      hosts: ["alpha", "omega"],
    },
  };
  t.assertEquals(d, chk);
});
Deno.test("str1", () => {
  t.assertEquals(TOML.parse('str = "I\'m a string."'), {
    str: "I'm a string.",
  });
});
Deno.test("str2", () => {
  t.assertEquals(TOML.parse('str = "You can \\"quote\\" me."'), {
    str: 'You can "quote" me.',
  });
});
Deno.test("str3", () => {
  t.assertEquals(TOML.parse('str = "Name\\tJos\\u00E9\\nLoc\\tSF."'), {
    str: "Name\tJos\u00E9\nLoc\tSF.",
  });
});
