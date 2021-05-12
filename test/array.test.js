import * as t from "https://deno.land/std/testing/asserts.ts";
import { TOML } from "../TOML.js";
import { parseURL } from "https://code4sabae.github.io/js/parseURL.js";
const { dirname } = parseURL(import.meta.url);

//return (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/).test(value);

Deno.test("simple", () => {
  t.assertEquals(TOML.parse("a=123"), { a: 123 });
});
Deno.test("date", () => {
  t.assertEquals(TOML.parse("date = 1979-05-27T07:32:00Z"), { date: new Date("1979-05-27T07:32:00.000Z") });
});
Deno.test("data", async () => {
  const s = await Deno.readTextFile(dirname + "example.toml");
  const d = TOML.parse(s);
  const chk = {
    title: "TOMLExample",
    owner: {
      name: "TomPreston-Werner",
      organization: "GitHub",
      bio: "GitHubCofounder&CEO\nLikestatertotsandbeer.",
      dob: new Date("1979-05-27T07:32:00.000Z")
    },
    database: {
      server: "192.168.1.1",
      ports: [ 8001, 8001, 8002 ],
      connection_max: 5000,
      enabled: true
    },
    servers: { alpha: { ip: "10.0.0.1", dc: "eqdc10" }, beta: { ip: "10.0.0.2", dc: "eqdc10" } },
    clients: { data: [ [ "gamma", "delta" ], [ 1, 2 ] ] },
    hosts: [ "alpha", "omega" ]
  };
  t.assertEquals(d, chk);
});
