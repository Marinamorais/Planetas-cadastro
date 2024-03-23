export default class Planet {
  constructor(
    name,
    date,
    primaryColor,
    secondaryColor,
    population,
    localization,
    ruler) {
    this.id = this.generateId();
    this.name = name;
    this.date = date;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.population = population;
    this.localization = localization;
    this.ruler = ruler;
  }
  generateId() {
    return Math.floor(Math.random() * 1000);
  }
  
}