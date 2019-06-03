import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import PalceCard from "../place-card/place-card.jsx";

import {getOffersByCity} from "../../utils/utils.js";

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this._imgClickHandler = this._imgClickHandler.bind(this);
    this._setActiveCardId = this._setActiveCardId.bind(this);
    this._resetActiveCardId = this._resetActiveCardId.bind(this);
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer, ind) => {
          return (
            <PalceCard
              key={ind}
              offer={offer}
              imgClickHandler={this._imgClickHandler}
              mouseEnterHandler={this._setActiveCardId}
              mouseLeaveHandler={this._resetActiveCardId}
            />
          );
        })}
      </div>
    );
  }

  _imgClickHandler(activeCardId) {
    return activeCardId;
  }

  _setActiveCardId(activeCardId) {
    this.setState({
      activeCardId
    });
  }

  _resetActiveCardId() {
    this.setState({
      activeCardId: null
    });
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
  return {offers: getOffersByCity(state.offers, state.currentCity)};
};

export {PlacesList};

export default connect(mapStateToProps)(PlacesList);
