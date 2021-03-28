import { Age } from './../src/galacticAge.js';

describe('Age', () => {
  let testPerson;
  let testPerson2;

  beforeEach(() =>  {
    testPerson = new Age(35, 100);
    testPerson2 = new Age(100, 35);
  })

  test('should correctly take in user age and desired life expectancy', () => {
    let userAge = new Age(35, 100);
    expect(userAge.earthAge).toEqual(35);
    expect(userAge.lifeExp).toEqual(100);
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Mercury years', () => {
    expect(testPerson.mercury()).toEqual("Your Mercury stats: Age - 8.4, Expected life - 24, Your remaining life is about 15.6 years!");
    expect(testPerson2.mercury()).toEqual("Your Mercury stats: Age - 24, Expected life - 8.4, You have outlived your life expectancy by 15.6 years!");
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Venus years', () => {
    expect(testPerson.venus()).toEqual("Your Venus stats: Age - 21.7, Expected life - 62, Your remaining life is about 40.3 years!");
    expect(testPerson2.venus()).toEqual("Your Venus stats: Age - 62, Expected life - 21.7, You have outlived your life expectancy by 40.3 years!");
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Mars years', () => {
    expect(testPerson.mars()).toEqual("Your Mars stats: Age - 65.8, Expected life - 188, Your remaining life is about 122.2 years!");
    expect(testPerson2.mars()).toEqual("Your Mars stats: Age - 188, Expected life - 65.8, You have outlived your life expectancy by 122.2 years!");
  });

  test('should correctly output: 1. users age 2. user life expectancy 3. years left, all refactored in Jupiter years', () => {
    expect(testPerson.jupiter()).toEqual("Your Jupiter stats: Age - 415.1, Expected life - 1186, Your remaining life is about 770.9 years!");
    expect(testPerson2.jupiter()).toEqual("Your Jupiter stats: Age - 1186, Expected life - 415.1, You have outlived your life expectancy by 770.9 years!");
  });

  test('should correctly assign dynamic value to this.yearsLeft, depending on if users age is below or beyond the expected life', () => {
    expect(testPerson.yearsDynamic()).toEqual("Your remaining life is about")
    expect(testPerson2.yearsDynamic()).toEqual("You have outlived your life expectancy by");
  });
});