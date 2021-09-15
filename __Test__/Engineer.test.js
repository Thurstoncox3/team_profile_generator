const Engineer = require('../lib/engineer');
const { it } = require('@jest/globals');

it ('office number should be presented', ()=> {
  const value = 'Software'
  const e = new Engineer('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.gitHub).toBe(value);
});

test ('getgitHub() should return officeNumebr', ()=> {
  const value = 'gitHub'
  const e = new Engineer('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.getgitHub).toBe(value);
});

test ('gotRole() should return \Engineer\'', ()=> {
  const value = 'Software'
  const e = new Engineer('Thurston', 896, 'thurstcx@yahoo.com', value);
  expect(e.getRole).toBe(value);
});