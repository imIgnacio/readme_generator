//Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { connected } = require('process');

let projectTitle;

//Array of questions for user input
const questions = [
    {type: 'input',
    message:"What is the name of the project?",
    name: 'title'},
    {type:'input',
    message:"Please write entitled description",
    name:'description'},
    { type: 'input',
    message:"What is the Table of Contents?",
    name: 'table'}, 
    {type: 'input',
    message:"Please write installation",
    name: 'installation'}, 
    {type: 'input',
    message:"Please describe usage",
    name: 'usage'}, 
    {type: 'input',
    message:"What it the license?",
    name: 'license'}, 
    {type: 'input',
    message:"Please write contributing",
    name: 'contributing'}, 
    {type: 'input',
    message: "What were tests done?",
    name: 'tests'}, 
    {type: 'input',
    message:"What are frequently asked questions?",
    name: 'faq'}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);

    fs.appendFile(fileName, `\n ${data} \n`, (err) =>
        err ? console.error(err) : console.log('Feature added successfully!')
    )
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Readme generator app");
    console.log("You will be asked some questions, please provide information required so readme can be generated");
    console.log("Let's get started");
    console.log("\n");

    //Ask for project title so I can create readme file
    inquirer
    .prompt(questions)
    .then((response) =>  {
        projectTitle = response.title.toLowerCase().split(" ").join("") + '.md';

        fs.writeFile(projectTitle, `# ${response.title}`, (err) =>
            err ? console.error(err) : console.log('Readme created successfully!')
        )

        writeToFile(projectTitle,response.description);
        writeToFile(projectTitle,response.table);
        writeToFile(projectTitle,response.installation);
        writeToFile(projectTitle,response.usage);
        writeToFile(projectTitle,response.license);
        writeToFile(projectTitle,response.contributing);
        writeToFile(projectTitle,response.tests);
        writeToFile(projectTitle,response.faq);
    })
}

// Function call to initialize app
init();
