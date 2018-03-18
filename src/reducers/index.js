import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import characters from './characters';

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    characters,
})

export default todoApp;