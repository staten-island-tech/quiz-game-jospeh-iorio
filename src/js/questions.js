const questions = [
    {
      question: "What is the best animal",
      answers: [
        { text: "Monkey", correct: true },
        { text: "Gorilla", correct: false },
        { text: "Chimp", correct: false },
        { text: "Lemur", correct: false },
      ],
    },
    {
      question: "Am I very tired right now",
      answers: [
        { text: "You bet", correct: true },
        { text: "No", correct: false },
        { text: "HAHAHAAH", correct: false },
        { text: "Okay", correct: false },
      ],
    },
    {
      question: "Did I spend a lot of time on this project ",
      answers: [
        { text: "Kinda", correct: true },
        { text: "So much! ", correct: false },
        { text: "Swag", correct: false },
        { text: "Okay", correct: false },
      ],
    },
    {
      question: "Did I give up many times",
      answers: [
        { text: "No", correct: false },
        { text: "Yes", correct: true },
        { text: "Only twice", correct: false },
        { text: "Only three times", correct: false },
      ],
      question:
        "What is 8+7 due to the fact I'm running out of questions to think of ",
      answers: [
        { text: "15", correct: true },
        { text: "12", correct: false },
        { text: "18", correct: false },
        { text: "17", correct: false },
      ],
    },
  ];
  

The old versions of JavaScript had no import, include, or require, so many different approaches to this problem have been developed.

But since 2015 (ES6), JavaScript has had the ES6 modules standard to import modules in Node.js, which is also supported by most modern browsers.

For compatibility with older browsers, build tools like Webpack and Rollup and/or transpilation tools like Babel can be used.
ES6 Modules

ECMAScript (ES6) modules have been supported in Node.js since v8.5, with the --experimental-modules flag, and since at least Node.js v13.8.0 without the flag. To enable "ESM" (vs. Node.js's previous CommonJS-style module system ["CJS"]) you either use "type": "module" in package.json or give the files the extension .mjs. (Similarly, modules written with Node.js's previous CJS module can be named .cjs if your default is ESM.)

Using package.json:

{

export function questions() {
  return "Questions";
}
