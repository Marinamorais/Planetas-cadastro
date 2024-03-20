export default class PlanetRepository {
  constructor() {
    this.planets = [];
  }
  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(planet) {
    this.planets.push(planet);
  }
  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }
  update(
    id,
    name,
    date,
    PrimaryColor,
    SecondaryColor,
    Population,
    Localization,
    Ruler
  ) {
    const planet = this.get(id);
    if (planet) {
      planet.name = name;
      planet.date = date;
      planet.PrimaryColor = PrimaryColor;
      planet.SecondaryColor = SecondaryColor;
      planet.Population = Population;
      planet.Localization = Localization;
      planet.Ruler = Ruler;
    }
    return planet;
  }
}
