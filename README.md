# toml-es

Very slim, very fast, no dependencies, [TOML](https://toml.io/)
parser implementation. Works both browser and Deno.  
小さく速く依存なしの[TOML](https://toml.io/)実装、ブラウザとDenoで動くESモジュールです。  
forked from [toml-js](https://github.com/alexbeletsky/toml-js)  

## Why?

[TOML](https://toml.io/) is a very convenient, INI-like storage
file format, suitable for many types of applications and utilities.

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

## Todo

* [Issues](https://github.com/alexbeletsky/toml-js/issues)
* Support [TOML v1.0.0](https://toml.io/en/v1.0.0)

## Contributing

You are very welcome.  
Please comment on [Issues](https://github.com/taisukef/toml-es/issues).  
Please fork, update [test](/test/), apply fix, build and submit the pull request.  

## Supported version

Support provided for
[v0.1.0](https://github.com/mojombo/toml/blob/master/versions/toml-v0.1.0.md)
version of [TOML](https://toml.io/) (latest up to 25 Feb 2013).

## Credits

- @alexbeletsky - [toml-js](https://github.com/alexbeletsky/toml-js) for base
  code.
- @rossipedia - [toml-net](https://github.com/rossipedia/toml-net) for
  well-rounded test suite.

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
