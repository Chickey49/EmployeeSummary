// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.validateString(github, "github");
        this.github = github;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
    static getPrompts(){
        return [
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engineerName"
            },
            {
                type: "input",
                message: "What is the engineer's ID?",
                name: "engineerID"
            },
            {
                type: "input",
                message: "What is the engineer's email?",
                name: "engineerEmail"
            },
            {
                type: "input",
                message: "What is the engineer's Github?",
                name: "engineerGithub"
            },
        ]
    }
}
module.exports = Engineer;