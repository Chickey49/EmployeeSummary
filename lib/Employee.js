
class Employee {
    constructor(name, id, email) {
        this.validateInt(id, "id");
        this.validateString(name, "name");
        this.validateString(email, "email");
        this.id = id;
        this.name = name;
        this.email = email;
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
        return 'Employee';
    }
    static getPrompts() {
        return [];
    }
    validateString(value, name) {
        if (typeof value !== "string") {
            throw new Error(name + ' must be a string');
        }
        if (value.length < 1) {
            throw new Error(name + ' must not be empty');
        }
    }
    validateInt(value, name) {
        if (value === undefined) {
            throw new Error(name + ' must be a number');
        }
        if (parseInt(value) === NaN) {
            throw new Error(name + ' must be a number');
        }
    }
}
module.exports = Employee;

