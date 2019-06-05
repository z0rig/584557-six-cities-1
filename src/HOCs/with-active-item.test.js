import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";
import {PlacesList} from "../components/places-list/places-list.jsx";

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
    coord: [52.3909553943508, 4.85309666406198]
  }
];

configure({adapter: new Adapter()});

const MockComponentWrapped = withActiveItem(PlacesList);

it(`Should change activeItemId correctly when item img was clicked`, () => {
  const wrapper = mount(<MockComponentWrapped offers={mock} />);

  const itemImg = wrapper.find(`img`);
  itemImg.simulate(`click`, {
    preventDefault: () => { }
  });

  wrapper.update();

  expect(wrapper.state().activeItemId).toEqual(`asdf0`);
});
