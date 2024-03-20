export default class Planet {
  constructor(
    id,
    name,
    date,
    PrimaryColor,
    SecondaryColor,
    Population,
    Localization,
    Ruler
  ) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.PrimaryColor = PrimaryColor;
    this.SecondaryColor = SecondaryColor;
    this.Population = Population;
    this.Localization = Localization;
    this.Ruler = Ruler;
  }
}
