import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

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
    housingType: `Palace`,
    coord: [52.3909553943508, 4.85309666406198]
  }
];

it(`Map correctly renders`, () => {
  const tree = renderer.create(<Map offers={mock} />).toJSON();
  expect(tree).toMatchSnapshot();
});
