const Intern = require('../lib/intern');
const { it } = require('@jest/globals');

it ('office number should be presented', ()=> {
  const value = 'UNCC'
  const e = new Intern('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.school).toBe(value);
});

test ('getOfficeNumber() should return officeNumebr', ()=> {
  const value = 'Intern'
  const e = new Intern('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.getSchool).toBe(value);
});

test ('gotRole() should return \Intern\'', ()=> {
  const value = 'UNCC'
  const e = new Intern('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.getRole).toBe(value);
});