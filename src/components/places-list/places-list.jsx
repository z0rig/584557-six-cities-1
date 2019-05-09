import React from "react";
import PropTypes from "prop-types";

import PalceCard from "../place-card/place-card.jsx";

const PlacesList = (props) => {
  const {titles} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {titles.map((title, ind) => {
        return (
          <PalceCard
            key={ind}
            title={title}
            headerClickHandler={() => {
              return 1;
            }}
          />
        );
      })}
    </div>
  );
};

PlacesList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PlacesList;
