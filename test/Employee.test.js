const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  try {
    const e = new Employee();
  } catch (error) {
    expect(error.message).toBe('Must be a number');
  }
});

test("Can set name via constructor arguments", () => {
  try {
    const e = new Employee("Alice");
  } catch (error) {
    expect(error.message).toBe('Must be a number');
  }
});


test("Can set id via constructor argument", () => {
  try {
    const e = new Employee("Alice", 100);
  } catch (error) {
    expect(error.message).toBe('email must be a string');
  }
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue, 100, "a.email");
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue, "name.email");
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});


