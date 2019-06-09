import {createSelector} from 'reselect';
import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.OFFERS;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCurrentCity = (state) => {
  return state[NameSpace.CURRENT_CITY].currentCity;
};

const getLocations = createSelector(
    getOffers,
    (offers) => {
      const locations = new Map();
      offers.forEach((offer) => {
        locations.set(offer.city.name, offer.city.location);
      });

      return locations;
    }
);

const getCurrentCityOffers = createSelector(
    getCurrentCity,
    getOffers,
    (currentCity, offers) => {
      return offers.filter((offer) => {
        return offer.city.name === currentCity;
      });
    }
);

export {
  getCurrentCity,
  getLocations,
  getCurrentCityOffers,
};
