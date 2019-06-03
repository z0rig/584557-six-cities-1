import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PalceCard from "../place-card/place-card.jsx";

import withActiveItem from "../../HOCs/with-active-item.jsx";

import {getOffersByCity} from "../../utils/utils.js";

const PlacesList = (props) => {
  const {offers, activeItemId, changeActiveItemId} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, ind) => {
        return (
          <PalceCard
            key={ind}
            offer={offer}
            activeItemId={activeItemId}
            itemClickHandler={changeActiveItemId}
          />
        );
      })}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  activeItemId: PropTypes.string,
  changeActiveItemId: PropTypes.func
};

const mapStateToProps = (state) => {
  return {offers: getOffersByCity(state.offers, state.currentCity)};
};

export {PlacesList};

export default connect(mapStateToProps)(withActiveItem(PlacesList));
