// import { TestScheduler } from 'jest';
import AgeCalculator from './../src/galacticAge.js';

describe('AgeCalculator', () => {
  let AgeCalculator;
  
  beforeEach(() => {
    AgeCalculator = new AgeCalculator(30," ");
    // let AgeCalculator.age = 30;
  });
  test('It should have 30 stored in the age property', () => {
    expect(AgeCalculator.age).toEqual(30);
  });
});