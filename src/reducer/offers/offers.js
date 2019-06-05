const initialState = {
  offers: []
};

const actionType = {
  LOAD_OFFERS: `LOAD_OFFERS`
};

const actionCreator = {
  loadOffers(offers) {
    return {
      type: actionType.LOAD_OFFERS,
      offers
    };
  }
};

const operation = {
  loadOffers: () => (dispath, _getState, api) => {
    return api.get(`\hotels`).then((response) => {
      dispath(actionCreator.loadOffers(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.offers
      };

    default:
      return state;
  }
};

export {
  actionType,
  actionCreator,
  operation,
  reducer
};
