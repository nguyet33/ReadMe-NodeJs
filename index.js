const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "Select a license for this project",
      choices: ["MIT", "Apache 2.0", "GPL 3.0"],
      name: "license",
    },
    {
      type: "list",
      message: "Chose the badge matching to your license",
      choices: [
        "Lisence-MIT-blue",
        "Lisence-Apache2.0-red",
        "Lisence-GBL3.0-yellow",
      ],
      name: "badge",
    },
    {
      type: "input",
      message: "what is the title of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "what is the descrition of the project?",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions?",
      name: "install",
    },
    {
      type: "input",
      message: "what are the usage information?",
      name: "usage",
    },
    {
      type: "input",
      message: "What are the contribution guidelines?",
      name: "contribution",
    },
    {
      type: "input",
      message: "are there any test intructions?",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "link",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ])

  .then((response) => {
    fs.writeFile(
      "./assets/README.md",
      `# License: ${response.license}
      ![${response.license}](https://img.shields.io/badge/${response.badge})

      # Title: ${response.title}

  ## Description
  
  Provide a short description explaining the what, why, and how of your project. 
  
  ${response.description}

  ## Table of Contents
  
  - [Installation](#install)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)


  ## Installs Instruction
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ${response.install}
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
 
  ${response.usage}
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)

  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## Features
  
  If your project has a lot of features, list them here.
  
  ## How to Contribute
  
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer. 
 
  ${response.usage}
  
  ## Tests
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

  ${response.test}
  
  ## Questions

  IF THERE ARE ANY QUESTIONS, PLEASE CONTACT ME AT:

  GitHub: github.com/${response.link}
  Email: ${response.email}
 
  `,
      (err) => (err ? console.log(err) : console.log("ReadMe Made!"))
    );
  });
