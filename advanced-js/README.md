# Advanced JavaScript
### Prototype Chain

Every normal JavaScript object has an internal link to another object called its prototype. When JavaScript cannot find a property on the object itself, it looks up the prototype chain until it finds the property or reaches `null`.

```js
student.toString();
```

If `student` does not define `toString`, JavaScript checks `student`'s prototype, then that prototype's prototype, and so on.

### ES6+ Syntax

Modern JavaScript makes common data operations shorter and clearer:

- Destructuring pulls values out of objects and arrays.
- Spread copies or expands values.
- Rest gathers remaining values.
- Optional chaining safely reads nested values that might be missing.

### Iterators And Generators

An iterable is something that can be looped with `for...of`. It exposes a method at `Symbol.iterator`.

A generator is a function declared with `function*`. It can pause with `yield` and resume later. Generators are useful for lazy sequences, custom iteration, and step-by-step workflows.

### ES Modules vs CommonJS

ES modules use `import` and `export`. They are statically analyzable and are the standard module system for modern JavaScript.

CommonJS uses `require()` and `module.exports`. It is older and common in legacy Node.js projects.



