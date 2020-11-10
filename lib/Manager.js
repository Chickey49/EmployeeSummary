const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
        return 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    static getPrompts(){
        return [
            {
                type: "input",
                message: "What is your manager's name?",
                name: "managerName"
            },
            {
                type: "input",
                message: "whats your manager's Id?",
                name: "managerID"
            },
            {
                type: "input",
                message: "whats your manager's email?",
                name: "managerEmail"
            },
            {
                type: "input",
                message: "whats your manager's office number?",
                name: "managerOffice"
            },
        ]
    }
}
module.exports = Manager;