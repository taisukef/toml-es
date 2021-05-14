import { parse } from "https://taisukef.github.io/j-toml/dist/ESM/j-toml.min.js";

// TOML parser implementation, v0.0.8
// Copyright (c)2013 alexander.beletsky@gmail.com
// Distributed under MIT license
// https://github.com/alexbeletsky/toml-js

const escapeString = (str) => {
  return str
    .replace(/\\b/g, "\\b")
    .replace(/\\t/g, "\\t")
    .replace(/\\n/g, "\\n")
    .replace(/\\f/g, "\\f")
    .replace(/\\r/g, "\\r")
    .replace(/"/g, '\\"');
};

const isSimpleType = (value) => {
  const type = typeof value;
  const strType = Object.prototype.toString.call(value);
  return type === "string" || type === "number" || type === "bigint" ||
    type === "boolean" ||
    strType === "[object Date]" || strType === "[object Array]";
};

const dumpObject = (value, context) => {
  context = context || [];
  const type = Object.prototype.toString.call(value);
  if (type === "[object Date]") {
    return value.toISOString();
  } else if (type === "[object Array]") {
    if (value.length === 0) {
      return null;
    }
    const bracket = "[";
    for (const index = 0; index < value.length; ++index) {
      bracket += dump(value[index]) + ", ";
    }
    return bracket.substring(0, bracket.length - 2) + "]";
  }

  let result = "";
  let simleProps = "";

  for (const propertyName in value) {
    if (isSimpleType(value[propertyName])) {
      simleProps += propertyName + " = " + dump(value[propertyName]) + "\n";
    }
  }

  if (simleProps) {
    if (context.length > 0) {
      const contextName = context.join(".");
      result += "[" + contextName + "]\n";
    }
    result += simleProps + "\n";
  }

  for (const propertyName in value) {
    if (!isSimpleType(value[propertyName])) {
      result += dump(value[propertyName], context.concat(propertyName));
    }
  }

  return result;
};

const dump = (value, context) => {
  switch (typeof value) {
    case "string":
      return '"' + escapeString(value) + '"';
    case "number":
    case "bigint":
      return "" + value;
    case "boolean":
      return value ? "true" : "false";
    case "object":
      return dumpObject(value, context);
  }
};

// extends by @taisukef
const array2object = (a) => {
  if (!Array.isArray(a)) {
    return a;
  }
  const o = {};
  for (let i = 0; i < a.length; i++) {
    o[i] = a[i];
  }
  return o;
};
const object2array = (o) => {
  for (const n in o) {
    if (parseInt(n) != n) {
      return o;
    }
  }
  const a = [];
  for (const n in o) {
    a[n] = o[n];
  }
  return a;
};

const TOML = {};
TOML.stringify = (o) => dump(array2object(o));
//TOML.parse = (a) => object2array(toml.parse(a));
//TOML.parse = (a) => parse(a, 1.0, "\n");
TOML.parse = (a) => object2array(parse(a, 1.0, "\n"));

export { TOML };
