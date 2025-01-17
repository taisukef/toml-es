# toml-es

Very slim, very fast, few dependencies, [TOML](https://toml.io/) parser
and stringify implementation. Works both browser and Deno.\
小さく速く依存が少ないの[TOML](https://toml.io/)実装、ブラウザとDenoで動くESモジュールです。\
forked from [toml-js](https://github.com/alexbeletsky/toml-js)\
use [LongTengDao/j-toml](https://github.com/LongTengDao/j-toml) for TOML.parse
1.0.0

## Why?

[TOML](https://toml.io/) is a very convenient, INI-like storage file format,
suitable for many types of applications and utilities.

## Running on browser

```html
<script type="module">
import { TOML } from "https://taisukef.github.io/toml-es/TOML.js";
</script>
```

Run parser,

```js
const text = await (await fetch("/config/settings.toml")).text();
const config = TOML.parse(text);
console.log(config);
```

Run dumper,

```js
const stringData = TOML.stringify({
  owner: { name: "Tom Preston-Werner", organization: "GitHub" },
});
```

## Running on Deno

```js
import { TOML } from "https://taisukef.github.io/toml-es/TOML.js";
```

Run parser,

```js
const text = await (await fetch("/config/settings.toml")).text();
const config = TOML.parse(text);
console.log(config);
```

Run dumper,

```js
const stringData = TOML.stringify({
  owner: { name: "Tom Preston-Werner", organization: "GitHub" },
});
```

## Contributing

You are very welcome.\
Please comment on [Issues](https://github.com/taisukef/toml-es/issues).\
Please fork, update [test](/test/), apply fix, build and submit the pull
request.

## Supported version

Support provided for [v1.0.0](https://toml.io/en/v1.0.0)

## Credits

- @alexbeletsky - [toml-js](https://github.com/alexbeletsky/toml-js) for stringify.
- @rossipedia - [toml-net](https://github.com/rossipedia/toml-net) for
  well-rounded test suite.
- @LongTengDao - [j-toml](https://github.com/LongTengDao/j-toml) for parse.

# Licence (MIT License)

Copyright (c) 2021 Taisuke Fukuno

Copyright (c) 2013 Alexander Beletsky

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
