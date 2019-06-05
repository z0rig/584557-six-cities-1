import {reducer, actionCreator} from "./current-city.js";

it(`Reducer change currentCity in state correctly`, () => {
  expect(
      reducer(
          {currentCity: `Amsterdam`},
          actionCreator.changeCurrentCity(`Moskow`)
      )
  ).toEqual({
    currentCity: `Moskow`
  });
});
