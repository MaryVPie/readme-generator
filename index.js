const fs = require("fs");
const inquirer = require("inquirer");
const { callbackify } = require("util");

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
        message: "What is your project content?",
        name: "Content"
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
        type: "input",
        message: "What license do you need for your project?",
        name: "License"
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
    // {
    //     type: "input",
    //     message: "Do you have any questions?",
    //     name: "Questions"
    // },
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
.then(answers=>{
    console.log(answers);
    fs.writeFile('README_gen.md', `
#Overview 
---

<h1 style="color: blue; font-weight: bold;">Project Title: ${answers.TItle}</h1>
<h2 style="font-size: medium;">What is your project about?</h2>
<p style="background: cadetblue;">Description:${answers.Description}</p>
<h2 style="font-size: medium;">What is your project content?${answers.Content}</h2>
<h2 style="font-size: medium;">How do you install the program?${answers.Installation}</h2>
<h2 style="font-size: medium;">How do you use this application?${answers.Usage}</h2>
<h2 style="font-size: medium;">What license do you need for your project?${answers.License}</h2>
<h2 style="font-size: medium;">What are the guidelines for contributing?${answers.Contributing}</h2>
<h2 style="font-size: medium;">What are the tests for this program?${answers.Tests}</h2>
<h3 style="font-style:italic;">Do you have any questions?</h3>
<ul>
    <li>
           <a target="_blank" href="${answers.username}">GitHub</a> 
    </li>
    <li>
            <a target="_blank" href="mailto:${answers.email}">email</a>
    </li>
</ul>`, (err) =>
  
    err ? console.error(err) : console.log('Commit logged!'));
});




