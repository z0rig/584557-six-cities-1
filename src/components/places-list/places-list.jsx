import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PalceCard from "../place-card/place-card.jsx";

import {getCurrentCityOffers} from "../../reducer/offers/selectors";

import withActiveItem from "../../HOCs/with-active-item.jsx";

const PlacesList = (props) => {
  const {offers, activeItemId, changeActiveItemId} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers ? offers.map((offer, ind) => {
        return (
          <PalceCard
            key={ind}
            offer={offer}
            activeItemId={activeItemId}
            itemClickHandler={changeActiveItemId}
          />
        );
      }) : null}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.string,
  changeActiveItemId: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    offers: getCurrentCityOffers(state)
  };
};

export {PlacesList};

export default connect(mapStateToProps)(withActiveItem(PlacesList));
