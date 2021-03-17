// import { TestScheduler } from 'jest';
import AgeCalculator from './../src/galacticAge.js';

describe('AgeCalculator', () => {
  let person;
  
  beforeEach(() => {
    person = new AgeCalculator(30, 74);
  });
  test('It should have 30 stored in the age property', () => {
    expect(person.age).toEqual(30);
  });
});