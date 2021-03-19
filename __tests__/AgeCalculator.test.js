// import { TestScheduler } from 'jest';
import AgeCalculator from './../src/galacticAge.js';

describe('AgeCalculator', () => {
  let person;
  
  beforeEach(() => {
    person = new AgeCalculator(30, 74, 7.2, 18.6, 56.4, 355.8, 60);
  });
  test('It should have 30 stored in the age property', () => {
    expect(person.age).toEqual(30);
  });

  test('It should have 74 stored in life expectancy property', () => {
    expect(person.lifeExpectancy).toEqual(74);
  });
  test('It should return the user age in mercury years', () => {
    expect(person.mercuryAge).toEqual(7.2);
  });
  test('It should return the user age in venus years', () => {
    expect(person.venusAge).toEqual(18.6);
    });
    test('It should return the user age in mars years', () => {
    expect(person.marsAge).toEqual(56.4);
    });
    test('It should return the user age in Jupiter years', () => {
    expect(person.jupiterAge).toEqual(355.8);
    });
    test('It should return the user age in Years Left', () => {
    expect(person.yearsLeft).toEqual(60);
    });
});