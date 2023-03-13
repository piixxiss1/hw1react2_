import React from 'react';
import withSwapi from '../hoc';
import {ItemDetails} from '../item-details/item-details';

const planetElementMethods = (swapi) => ({
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage
})
const PlanetItemDetails = withSwapi(ItemDetails, planetElementMethods)

const personElementsMethods = (swapi) => ({
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage,
})
const PersonItemDetails = withSwapi(ItemDetails, personElementsMethods)

const starshipElementsMethods = (swapi) => ({
    getData: swapi.getPerson,
    getImage: swapi.getPersonImage,
})
const StarshipItemDetails = withSwapi(ItemDetails, starshipElementsMethods)

export {PlanetItemDetails, PersonItemDetails, StarshipItemDetails}