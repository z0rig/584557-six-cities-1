const initialState = {
  offers: []
};

const actionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const actionCreators = {
  loadOffers(offers) {
    return {
      type: actionTypes.LOAD_OFFERS,
      offers
    };
  }
};

const operations = {
  loadOffers: () => (dispath, _getState, api) => {
    return api.get(`\hotels`).then((response) => {
      dispath(actionCreators.loadOffers(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_OFFERS:
      return {
        ...state,
        offers: action.offers
      };

    default:
      return state;
  }
};

export {
  actionTypes,
  actionCreators,
  operations,
  reducer
};
