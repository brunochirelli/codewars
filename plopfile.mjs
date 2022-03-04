export default function (plop) {
  // file generator
  plop.setGenerator("challenge", {
    description: "create challenge",
    prompts: [
      {
        type: "input",
        name: "folderName",
        message: "Enter the folder name:",
      },
      {
        type: "input",
        name: "fileName",
        message: "Enter the file name:",
      },
      {
        type: "input",
        name: "firstTestCase",
        message: "Write the first test sentence:",
      },
      {
        type: "input",
        name: "testArguments",
        message: "Define the test argument(s):",
      },
      {
        type: "input",
        name: "firstTestResult",
        message: "Define the first test result:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{folderName}}/{{fileName}}.js",
        templateFile: ".plop-templates/challenge/challenge.hbs",
      },
      {
        type: "add",
        path: "{{folderName}}/{{fileName}}.test.js",
        templateFile: ".plop-templates/challenge/challenge-test.hbs",
      },
    ],
  });
}
