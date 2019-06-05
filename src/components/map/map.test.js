import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Map} from "./map.jsx";

const mock = [
  {
    id: `asdf0`,
    isPremium: true,
    imgSrc: `img/apartment-01.jpg`,
    price: 12000,
    period: `day`,
    isFavorite: true,
    rating: 5,
    title: `Old palace`,
    housingType: `Palace`,
    location: {latitude: 52.3909553943508, longitude: 4.85309666406198}
  }
];

Enzyme.configure({adapter: new Adapter()});

it(`Map correctly renders`, () => {
  const map = mount(<Map offers={mock} currentCity="Amsterdam" />);
  expect(map).toMatchSnapshot();
});
