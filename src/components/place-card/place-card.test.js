import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const mock = {
  id: `asdf0`,
  isPremium: true,
  imgSrc: `img/apartment-01.jpg`,
  price: 12000,
  period: `day`,
  raiting: 5,
  title: `Old palace`,
  housingType: `Palace`
};

it(`PlaceCard correctly renders`, () => {
  const tree = renderer.create(<PlaceCard offer={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
