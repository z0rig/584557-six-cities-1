import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard title correctly handles clicks`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(
      <PlaceCard title="test" headerClickHandler={clickHandler} />
  );

  const title = placeCard.find(`.place-card__name a`);

  title.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
