import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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

Enzyme.configure({adapter: new Adapter()});

it(`App correctly renders`, () => {
  const app = shallow(<App offers={mock} />);
  expect(app).toMatchSnapshot();
});
