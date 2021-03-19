export default class AgeCalculator {
  constructor (age, lifeExpectancy, mercuryAge, marsAge, venusAge, jupiterAge, yearsLeft) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this.mercuryAge = parseFloat(age * .24).toFixed(1);
  this.venusAge = parseFloat(age * .62).toFixed(1);
  this.marsAge = parseFloat(age * 1.88).toFixed(1);
  this.jupiterAge = parseFloat(age * 11.86).toFixed(1);
  this.yearsLeft = parseFloat(90 - age).toFixed(1);
  }
}