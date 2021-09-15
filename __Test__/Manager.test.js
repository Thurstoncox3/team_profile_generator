const { it } = require('@jest/globals');
const Manager = require('../lib/manager');

it ('office number should be presented', ()=> {
  const value = '556'
  const e = new Manager('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.officeNumber).toBe(value);
});

test ('getOfficeNumber() should return officeNumebr', ()=> {
  const value = 'Manager'
  const e = new Manager('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.getOfficeNumber).toBe(value);
});

test ('gotRole() should return \Manager\'', ()=> {
  const value = '556'
  const e = new Manager('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.getRole).toBe(value);
});