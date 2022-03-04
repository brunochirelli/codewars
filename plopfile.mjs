export default function (plop) {
  // file generator
  plop.setGenerator("challenge", {
    description: "create challenge",
    prompts: [
      {
        type: "input",
        name: "folderName",
        message: "Folder Name",
      },
      {
        type: "input",
        name: "fileName",
        message: "File Name",
      },
      {
        type: "input",
        name: "firstTestCase",
        message: "First Test Sentence",
      },
      {
        type: "input",
        name: "firstTestResult",
        message: "First Test Result",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{folderName}}/{{fileName}}.js",
        templateFile: "plop-templates/challenge.hbs",
      },
      {
        type: "add",
        path: "src/{{folderName}}/{{fileName}}.test.js",
        templateFile: "plop-templates/challenge-test.hbs",
      },
    ],
  });
}
