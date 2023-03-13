import ItemList from "../item-list";
import withSwapi from "../hoc";

const planetsElementMethods = (swapi) => ({getData: swapi.getAllPlanets})
const PlanetList = withSwapi(ItemList, planetsElementMethods)

const peopleElementMethods = (swapi) => ({getData: swapi.getAllPeople})
const PeopleList = withSwapi(ItemList, peopleElementMethods)

const starshipElementMethods = (swapi) => ({getData: swapi.getAllStarships})
const StarshipList = withSwapi(ItemList, starshipElementMethods)


export{PlanetList, PeopleList, StarshipList}