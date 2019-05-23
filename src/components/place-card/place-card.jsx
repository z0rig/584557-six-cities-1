import React from "react";
import PropTypes from "prop-types";

const PlaceCard = (props) => {
  const {
    offer,
    imgClickHandler,
    mouseEnterHandler,
    mouseLeaveHandler
  } = props;
  const {
    id,
    isPremium,
    imgSrc,
    price,
    period,
    inBookmarks,
    raiting,
    title,
    housingType
  } = offer;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => {
        mouseEnterHandler(id);
      }}
      onMouseLeave={mouseLeaveHandler}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={imgSrc || `https://place-hold.it/260x200`}
            width="260"
            height="200"
            alt="Place image"
            onClick={(evt) => {
              evt.preventDefault();
              imgClickHandler(id);
            }}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;{period}</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${inBookmarks &&
              `place-card__bookmark-button--active`}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${raiting}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{housingType}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
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
  }).isRequired,
  imgClickHandler: PropTypes.func,
  mouseEnterHandler: PropTypes.func,
  mouseLeaveHandler: PropTypes.func
};

export default PlaceCard;
