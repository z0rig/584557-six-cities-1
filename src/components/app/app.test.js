import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {App} from "./app.jsx";
// import configureStore from 'redux-mock-store';

// const mockState = {
//   "AUTHORIZATION_REQUIRED": {
//     "isAuthorizationRequired": false,
//     "userData": null,
//   },
//   "CURRENT_CITY": {
//     currentCity: `Amsterdam`
//   },
//   "OFFERS": {
//     offers: []
//   }
// };

// const mockStore = configureStore();
// const store = mockStore(mockState);

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders`, () => {
  const app = shallow(<App isAuthorizationRequired={true} />);
  expect(app).toMatchSnapshot();
});
