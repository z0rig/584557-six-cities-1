const initialState = {
  userData: null,
  isAuthorizationRequired: true
};

const actionTypes = {
  AUTHORIZATION_REQUIRED: `AUTHORIZATION_REQUIRED`,
  GET_USER_DATA: `GET_USER_DATA`
};

const actionCreators = {
  authorizationRequired(status) {
    return {
      type: actionTypes.AUTHORIZATION_REQUIRED,
      status
    };
  },
  getUserData(data) {
    return {
      type: actionTypes.GET_USER_DATA,
      data
    };
  }
};

const operations = {
  authorizationReques: (email, password) => (dispath, _getState, api) => {
    return api.post(`\login`, {email, password}).then((response) => {
      dispath(actionCreators.getUserData(response.data));
      dispath(actionCreators.authorizationRequired(false));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZATION_REQUIRED:
      return {
        ...state,
        isAuthorizationRequired: action.status
      };

    case actionTypes.GET_USER_DATA:
      return {
        ...state,
        userData: action.data
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
