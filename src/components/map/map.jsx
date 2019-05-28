import React from "react";
import leaflet from "leaflet";
import PropTypes from "prop-types";

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mapContaineer = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const amsterdamCityCoord = [52.38333, 4.9];
    const zoom = 12;

    const pin = leaflet.icon({
      iconUrl: `img/mapPin.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this._mapContaineer.current, {
      center: amsterdamCityCoord,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(amsterdamCityCoord, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(map);

    offers.forEach((it) => {
      leaflet.marker(it.coord, {pin}).addTo(map);
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
  )
};

export default Map;
