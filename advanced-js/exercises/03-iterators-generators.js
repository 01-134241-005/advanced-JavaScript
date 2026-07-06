/*
  Topic: Iterators and generators

  Goal:
  Understand how `for...of` works and how generators produce lazy values.
*/

const lessonPlan = {
  lessons: ["Prototype chain", "ES6 syntax", "Generators", "Modules"],

  [Symbol.iterator]() {
    let index = 0;
    const lessons = this.lessons;

    return {
      next() {
        if (index < lessons.length) {
          return { value: lessons[index++], done: false };
        }

        return { value: undefined, done: true };
      },
    };
  },
};

for (const lesson of lessonPlan) {
  console.log("Manual iterator:", lesson);
}

function* lessonGenerator(lessons) {
  for (const lesson of lessons) {
    yield `Study: ${lesson}`;
  }
}

const generatedLessons = lessonGenerator(lessonPlan.lessons);

console.log(generatedLessons.next());
console.log(generatedLessons.next());
console.log([...generatedLessons]);

function* idGenerator(prefix = "student") {
  let id = 1;

  while (true) {
    yield `${prefix}-${id++}`;
  }
}

const ids = idGenerator();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);

/*
  Notes:

  - An iterator has a `next()` method.
  - `next()` returns an object with `value` and `done`.
  - An iterable has a `[Symbol.iterator]()` method.
  - Generators create iterators with much less boilerplate.
  - Generators are lazy: they produce values only when requested.
*/


