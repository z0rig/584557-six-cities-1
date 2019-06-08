import reducer from "./reducer.js";

it(`Reducer should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    "AUTHORIZATION_REQUIRED": {
      "isAuthorizationRequired": false,
      "userData": null,
    },
    "CURRENT_CITY": {
      currentCity: `Amsterdam`
    },
    "OFFERS": {
      offers: []
    }
  });
});
