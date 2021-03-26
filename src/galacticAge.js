export default class galacticAge {
  constructor (age, lifeExpectancy, mercuryAge, marsAge, venusAge, jupiterAge, yearsLeft) {
  this.age = age;
  this.lifeExpectancy = lifeExpectancy;
  this.mercuryAge = .24;
  this.venusAge = .62;
  this.marsAge = 1.88;
  this.jupiterAge = 11.86;
  this.yearsLeft = 90 - age;
  }
  
  // getPlanetAge(planet) {
  //   var planetAge = this.planet * this.age;
  //   return `Your age on Planet is ${getPlanetAge}
  // }