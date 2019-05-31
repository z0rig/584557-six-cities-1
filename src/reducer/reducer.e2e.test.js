import reducer from "./reducer.js";
import {actionCreators} from "./reducer.js";
import offers from "../mocks/offers.js";

it(`Reducer should return initial state by default`, () => {
  expect(reducer(undefined, {})).toEqual({
    currentCity: `Amsterdam`,
    offers
  });
});

it(`Reducer change currentCity in state correctly`, () => {
  expect(
      reducer(
          {currentCity: `Amsterdam`},
          actionCreators.changeCurrentCity(`Moskow`)
      )
  ).toEqual({
    currentCity: `Moskow`
  });
});
