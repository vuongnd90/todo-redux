import Constants from "../constants/Constants";

const initialState = {
  isFetching: false,
  meta: {
    totalRecords: 0,
    offset: 0,
  },
  items: [],
};

const characters = (state=initialState, action) => {
  switch(action.type) {
    case Constants.FETCH_ALL_REQUEST:
      return Object.assign({}, state, { isFetching: true });

    case Constants.FETCH_ALL_SUCCESS:
      return Object.assign({}, state, { 
        isFetching: false,
        meta: {
          totalRecords: action.payload.data.total,
          offSet: action.payload.data.offset,
        },
        items: action.payload.data.results,
      });

    default:
      return state;
  }
}

export default characters;