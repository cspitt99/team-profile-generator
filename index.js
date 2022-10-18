const inquirer = require("inquirer")
const fs = require('fs')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const generateHTML = require("./src/generateHTML")
const generateManager = require('./src/generateManager')
const generateEngineer = require('./src/generateEngineer')
const generateIntern = require('./src/generateIntern')

const employeeArray = [];

const managerQuestions = [
    {type: "input", message: "What is their name?", name: "managerName"},
    {type: "input", message: "What is their ID?", name: "managerId"},
    {type: "input", message: "What is their email?", name: "managerEmail"},
    {type: "input", message: "What is their office number?", name: "managerOfficeNumber"}
];

const engineerQuestions = [
    {type: "input", message: "What is their name?", name: "engineerName"},
    {type: "input", message: "What is their ID?", name: "engineerId"},
    {type: "input", message: "What is their email?", name: "engineerEmail"},
    {type: "input", message: "What is their Github?", name: "engineerGithub"}
];

const internQuestions = [
    {type: "input", message: "What is their name?", name: "internName"},
    {type: "input", message: "What is their ID?", name: "internId"},
    {type: "input", message: "What is their email?", name: "internEmail"},
    {type: "input", message: "What is their school?", name: "internSchool"}
];

function init() {
    inquirer
        .prompt(managerQuestions)
        .then(response => {
            const manager = new Manager
                (response.managerName,
                    response.managerId,
                    response.managerEmail,
                    response.managerNumber);

            employeeArray.push(manager);
            confirmNext();
        })
};

function confirmNext() {
    inquirer
        .prompt([{
            type: 'confirm',
            message: 'Do you want to continue to add employees to your team?',
            name: 'addMore'
        }])
        .then(response => {
            if (response.addMore === true) {
                addEmployee();
            } else {
                createHTML();
            }
        })
};

function addEmployee() {
    inquirer
        .prompt([{
            type: 'list',
            message: 'Do you wish to add an engineer or an intern?',
            choices: ["Engineer", "Intern"],
            name: 'addType'
        }])
        .then((response) => {
            if (response.addType === 'Engineer') {
                inquirer
                    .prompt(engineerQuestions)
                    .then(response => {
                        const engineer = new Engineer
                            (response.engineerName,
                                response.engineerId,
                                response.engineerEmail,
                                response.engineerGithub);

                        employeeArray.push(engineer);
                        confirmNext();
                    })
            

            } else if (response.addType === 'Intern') {
                inquirer
                    .prompt(internQuestions)
                    .then(response => {
                        const intern = new Intern
                            (response.internName,
                                response.internId,
                                response.internEmail,
                                response.internSchool);

                        employeeArray.push(intern);
                        confirmNext();
                    })
            }
        })
}

function createHTML() {
    console.log(employeeArray)

    let cards = ""

    for (let i = 0; i < employeeArray.length; i++) {
        if (employeeArray[i].getRole() === "Manager") {
            cards = cards + generateManager(employeeArray[i])
        }
        else if (employeeArray[i].getRole() === "Engineer") {
            cards = cards + generateEngineer(employeeArray[i])
        } else {
            cards = cards + generateIntern(employeeArray[i])
        }
    }

    fs.writeFileSync("./dist/index.html", generateHTML(cards));
}

init();