import Axios from 'axios';


export default class ApiService {

  _apiBaseUrl = `https://swapi.dev/api`;

  _imageBaseUrl = `https://starwars-visualguide.com/assets/img`;

  _API = Axios.create({
    baseURL: this._apiBaseUrl,
    timeout: 1000 * 10,
    headers: {
      'Content-Type': `application/json`,
    },
  })

  getResource = async (url) => {
    const res = await this._API(url);

    if (res.status !== 200) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return res.data;
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);

    return res.results.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);

    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);

    return res.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);

    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);

    return res.results.map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);

    return this._transformStarship(starship);
  };

  getPersonImage = ({id}) => `${this._imageBaseUrl}/characters/${id}.jpg`;

  getStarshipImage = ({id}) => `${this._imageBaseUrl}/starships/${id}.jpg`;

  getPlanetImage = ({id}) => `${this._imageBaseUrl}/planets/${id}.jpg`;

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;

    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => ({
    id: this._extractId(planet),
    name: planet.name,
    population: planet.population,
    climate: planet.climate,
    terrain: planet.terrain,
    gravity: planet.gravity,
    orbitalPeriod: planet.orbital_period,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  });

  _transformStarship = (starship) => ({
    id: this._extractId(starship),
    name: starship.name,
    model: starship.model,
    starshipClass: starship.starship_class,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    consumables: starship.consumables,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  });

  _transformPerson = (person) => ({
    id: this._extractId(person),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  });

}
