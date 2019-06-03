import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

const mock = {
  id: `asdf0`,
  isPremium: true,
  imgSrc: `img/apartment-01.jpg`,
  price: 12000,
  period: `day`,
  inBookmarks: true,
  raiting: 100,
  title: `Old palace`,
  housingType: `Palace`,
  coord: [52.3909553943508, 4.85309666406198]
};

Enzyme.configure({adapter: new Adapter()});
const itemClickHandler = jest.fn();

it(`PlaceCard img correctly handles clicks`, () => {
  const placesCard = shallow(
      <PlaceCard offer={mock} itemClickHandler={itemClickHandler} />
  );

  const card = placesCard.find(`.place-card`);
  const cardImg = card.find(`.place-card__image-wrapper img`);

  cardImg.simulate(`click`, {
    preventDefault: () => {}
  });

  expect(itemClickHandler).toHaveBeenCalledWith(`asdf0`);
});
