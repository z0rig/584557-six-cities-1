import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";

const mock = [
  {
    id: `asdf0`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`,
    price: 12000,
    period: `day`,
    inBookmarks: true,
    raiting: 5,
    title: `Old palace`,
    housingType: `Palace`
  }
];

it(`PlacesList correctly renders`, () => {
  const tree = renderer.create(<PlacesList offers={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
