/*
  Topic: ES modules

  Goal:
  See how `import` and `export` differ from CommonJS.

  This file imports from `module-library.mjs`.
*/

import defaultMessage, { formatTopic, moduleNotes } from "./module-library.mjs";

console.log(defaultMessage);
console.log(formatTopic("ES modules"));
console.log(moduleNotes);

/*
  ES Modules:

  export function formatTopic(topic) {}
  import { formatTopic } from "./module-library.mjs";

  CommonJS:

  module.exports = { formatTopic };
  const { formatTopic } = require("./module-library.cjs");

  Key differences:

  - ES modules use `import` and `export`.
  - CommonJS uses `require()` and `module.exports`.
  - ES module imports are static and can be analyzed before running code.
  - CommonJS imports are runtime function calls.
  - ES modules are the modern browser and Node.js standard.
*/

