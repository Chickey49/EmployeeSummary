// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
    static getPrompts(){
        return [
            {
                type: "input",
                message: "What is the intern's name?",
                name: "internName"
            },
            {
                type: "input",
                message: "What is the intern's ID?",
                name: "internID"
            },
            {
                type: "input",
                message: "What is the interns's email?",
                name: "internEmail"
            },
            {
                type: "input",
                message: "What is the intern's School?",
                name: "internSchool"
            },
        ]
    }
}
module.exports = Intern;

