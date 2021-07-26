// Imports the filesystem module, inquirer package and declares an array of licenses
const fs = require("fs");
const inquirer = require("inquirer");
let licenses = ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "Public Domain Dedication and License (PDDL)", "The MIT License", "Mozilla Public License 2.0"];

// Questions to user
inquirer
.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "TItle"
    },
    {
        type: "input",
        message: "What is your project about?",
        name: "Description"
    },
    {
        type: "input",
        message: "How do you install the program?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How do you use this application?",
        name: "Usage"
    },
    {
        type: "list",
        message: "What license do you need for your project?",
        name: "License",
        choices: licenses
    },
    {
        type: "input",
        message: "What are the guidelines for contributing?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "What are the tests for this program?",
        name: "Tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    }

    
])
// User's feedback and generates readme file
.then(answers=>{
    console.log(answers);
    fs.writeFile('README.md', `

## Project: ${answers.TItle}
${GetBadgeByLicenseName(answers.License)}

### Description
${answers.Description}

    
### Table of Contents    
[TOC]
    
### Installation
${answers.Installation}

### Usage
${answers.Usage}

### License
This project is covered under **${answers.License}**

### Contributing
${answers.Contributing}

### Tests
${answers.Tests}

### Questions

:smiley_cat: [GitHub URL](https://github.com/${answers.username}) 

If you have additional question you can reach me by email :e-mail:  [Email: ${answers.email}](mailto:${answers.email})
    
---`, (err) =>
  
    err ? console.error(err) : console.log('Commit logged!'));
});

function GetBadgeByLicenseName(name) {
    
    switch (name) {
        case "Apache 2.0 License":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case "Boost Software License 1.0":
            return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        case "BSD 3-Clause License":
            return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        case "BSD 2-Clause License":
            return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
        case "GNU GPL v3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        case "GNU GPL v2":
            return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
        case "GNU AGPL v3":
            return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        case "Public Domain Dedication and License (PDDL)":
            return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
        case "The MIT License":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        case "Mozilla Public License 2.0":
            return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

      }
}


