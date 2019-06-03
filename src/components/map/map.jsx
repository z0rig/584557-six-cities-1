import React from "react";
import {connect} from "react-redux";
import leaflet from "leaflet";
import PropTypes from "prop-types";

import mapSettings from "./mapSettings.js";

import {getOffersByCity} from "../../utils/utils.js";
import {locations} from "../../reducer/reducer.js";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapContaineer = React.createRef();
  }

  componentDidMount() {
    const {offers, currentCity} = this.props;
    const {zoom, iconUrl, iconSize} = mapSettings;
    const {coords} = locations[currentCity];

    this._icon = leaflet.icon({iconUrl, iconSize});

    this._map = leaflet.map(this._mapContaineer.current, {
      center: coords,
      zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(coords, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(this._map);

    offers.forEach((it) => {
      leaflet.marker(it.coord, this._icon).addTo(this._map);
    });
  }

  componentDidUpdate() {
    const {offers, currentCity} = this.props;
    const {zoom} = mapSettings;
    const {coords} = locations[currentCity];

    this._map.flyTo(coords, zoom);

    offers.forEach((it) => {
      leaflet.marker(it.coord, this._icon).addTo(this._map);
    });
  }

  render() {
    return (
      <div className="cities__right-section">
        <section
          className="cities__map map"
          id="map"
          ref={this._mapContaineer}
        />
      </div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        isPremium: PropTypes.bool,
        imgSrc: PropTypes.string,
        price: PropTypes.number.isRequired,
        period: PropTypes.oneOf([`month`, `day`]),
        inBookmarks: PropTypes.bool.isRequired,
        raiting: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        housingType: PropTypes.oneOf([
          `Palace`,
          `Bungalow`,
          `Apartment`,
          `KoykoMesto`
        ])
      }).isRequired
  ),
  currentCity: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    offers: getOffersByCity(state.offers, state.currentCity),
    currentCity: state.currentCity
  };
};

export {Map};

export default connect(mapStateToProps)(Map);
