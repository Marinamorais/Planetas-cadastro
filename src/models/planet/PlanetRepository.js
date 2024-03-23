import { planet } from "../../data/Profile";
import Planet from "./Planet";

class PlanetsRepository {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(newPlanet) {
    this.planets.push(newPlanet);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  update(id, name, date, primaryColor, secondaryColor, population, localization, ruler) {
    const planet = this.get(id);

    if (planet) {
      planet.name = name;
      planet.date = date;
      planet.primaryColor = primaryColor;
      planet.secondaryColor = secondaryColor;
      planet.population = population;
      planet.localization = localization;
      planet.ruler = ruler;
    }
    return planet;
  }
}

const planetsRepository = new PlanetsRepository();
const newPlanet = new Planet(
  planet.name,
  planet.date,
  planet.primaryColor,
  planet.secondaryColor,
  planet.population,
  planet.localization,
  planet.ruler,
);

planetsRepository.add(newPlanet);

export default planetsRepository;