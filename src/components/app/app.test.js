import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const mock = [
  {
    id: `asdf0`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`,
    price: 12000,
    period: `day`,
    inBookmarks: true,
    raiting: 100,
    title: `Old palace`,
    housingType: `Palace`
  }
];

it(`App correctly renders`, () => {
  const tree = renderer.create(<App offers={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
