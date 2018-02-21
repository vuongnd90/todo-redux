import Constants from '../constants/Constants';

const visibilityFilter = (state = Constants.SHOW_ALL, action) => {
  switch (action.type) {
    case Constants.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;