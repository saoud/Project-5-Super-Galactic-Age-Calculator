// import { TestScheduler } from 'jest';
import AgeCalculator from '../src/galacticAge.js'

describe('AgeCalculator', () => {

  let AgeCalculator; 

  beforeEach(() => {
    let AgeCalculator = new AgeCalculator(30, lifeExpectancy)
    // let AgeCalculator.age = 30;
  });
  test('It should have 30 stored in the age property', () => {
    expect (AgeCalculator.age).toEqual(30);
  });
});