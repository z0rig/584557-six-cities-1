import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";

const titles = [`test`, `test1`, `test2`, `test3`];

it(`PlacesList correctly renders`, () => {
  const tree = renderer.create(<PlacesList titles={titles} />).toJSON();
  expect(tree).toMatchSnapshot();
});
