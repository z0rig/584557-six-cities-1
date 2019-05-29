import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({adapter: new Adapter()});

it(`Map correctly renders`, () => {
  const map = mount(<Map offers={mock} />);
  expect(map).toMatchSnapshot();
});
