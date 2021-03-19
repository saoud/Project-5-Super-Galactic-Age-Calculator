export default class AgeCalculator {
  constructor (age, lifeExpectancy, mercuryAge, marsAge, venusAge, jupiterAge, yearsLeft) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this.mercuryAge = .24;
  this.venusAge = .62;
  this.marsAge = 1.88;
  this.jupiterAge = 11.86;
  this.yearsLeft = 90 - age;
  }
}