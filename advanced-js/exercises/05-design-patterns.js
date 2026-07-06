/*
  Topic: Common design patterns

  Goal:
  Recognize simple patterns that appear often in JavaScript codebases.
*/

// Factory pattern: create objects without exposing construction details.
function createLesson(title, minutes) {
  return {
    title,
    minutes,
    complete: false,
    markComplete() {
      this.complete = true;
    },
  };
}

const prototypeLesson = createLesson("Prototype Chain", 25);
prototypeLesson.markComplete();
console.log(prototypeLesson);

// Module pattern: group related state and behavior.
const progressTracker = (() => {
  const completed = new Set();

  return {
    complete(topic) {
      completed.add(topic);
    },
    hasCompleted(topic) {
      return completed.has(topic);
    },
    listCompleted() {
      return [...completed];
    },
  };
})();

progressTracker.complete("ES6 syntax");
progressTracker.complete("Generators");
console.log(progressTracker.listCompleted());

// Strategy pattern: swap behavior without changing the caller.
const formatters = {
  short(topic) {
    return topic;
  },
  detailed(topic) {
    return `Study topic: ${topic}`;
  },
};

function printTopic(topic, formatter = formatters.short) {
  console.log(formatter(topic));
}

printTopic("Modules");
printTopic("Modules", formatters.detailed);

/*
  Notes:

  - Factory: a function creates and returns objects.
  - Module: code exposes a public API while hiding private details.
  - Strategy: behavior is passed in or selected instead of hardcoded.
*/


