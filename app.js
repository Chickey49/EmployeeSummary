const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const {render, save} = require("./lib/htmlRenderer");
const fs = require("fs");


var employees = [];

main();

async function main() {
    console.log("Please build your team");
    var answers = await inquirer.prompt(Manager.getPrompts());
    let manager = new Manager(
        answers.managerName,
        answers.managerID,
        answers.managerEmail,
        answers.managerOffice
    );
    employees.push(manager);
    await getNextEmployee();
    var html = render(employees);
    save(html);
    console.log("done");
}

/**
 * recursive Helper to add employees
 * function calls itself until employees are done.
 */
async function getNextEmployee() {
    let nextEmployeePrompt =
        [{
            type: "list",
            message: "which type of team member would you like to add?",
            name: "addTeammate",
            choices: ["Engineer", "Intern", "done"],
        }];

    console.log("prompting for next.");
    var answers = await inquirer.prompt(nextEmployeePrompt);
    if (answers.addTeammate.toLowerCase() == "engineer") {
        let answers = await inquirer.prompt(Engineer.getPrompts());
        let e = new Engineer(
            answers.engineerName,
            answers.engineerID,
            answers.engineerEmail,
            answers.engineerGithub
        );
        employees.push(e);
        await getNextEmployee();
    }

    if (answers.addTeammate.toLowerCase() == "intern") {
        let answers = await inquirer.prompt(Intern.getPrompts());
        let i = new Intern(
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool);
        employees.push(i);
        await getNextEmployee();
    }
}
render(employees)
module.exports = employees;