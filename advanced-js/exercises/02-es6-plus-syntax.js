/*
  Topic: ES6+ syntax

  Goal:
  Practice destructuring, spread, rest, and optional chaining.
*/

const course = {
  title: "Advanced JavaScript",
  section: "Videos 36-51",
  teacher: {
    name: "Code Mentor",
  },
  topics: ["prototypes", "modules", "generators"],
};

const { title, section, teacher: { name: teacherName } = {} } = course;
console.log(title, section, teacherName);

const [firstTopic, ...remainingTopics] = course.topics;
console.log("First:", firstTopic);
console.log("Remaining:", remainingTopics);

const updatedCourse = {
  ...course,
  level: "advanced",
  topics: [...course.topics, "patterns"],
};

console.log(updatedCourse);

const missingTeacherEmail = course.teacher?.contact?.email ?? "No email provided";
console.log(missingTeacherEmail);

function enrollStudent(courseTitle, ...students) {
  return {
    courseTitle,
    count: students.length,
    students,
  };
}

console.log(enrollStudent("Advanced JavaScript", "Sara", "Omar", "Nadia"));

/*
  Notes:

  - Object destructuring extracts named fields.
  - Array destructuring extracts by position.
  - Spread expands or copies values.
  - Rest gathers the remaining values into an array.
  - Optional chaining avoids errors when a nested value is missing.
*/


