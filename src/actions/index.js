import axios from 'axios';
import Constants from '../constants/Constants';
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: Constants.ADD_TODO,
  id: nextTodoId++,
  text,
})

export const toggleTodo = (id) => ({
  type: Constants.TOGGLE_TODO,
  id,
})

export const setVisibilityFilter = (filter) => ({
  type: Constants.SET_VISIBILITY_FILTER,
  filter
}) 

export const removeTodo = (id) => ({
  type: Constants.REMOVE_TODO,
  id
})

export const getCharacters = (offset=null) => {
  return (dispatch) => {
    dispatch({
      type: Constants.FETCH_ALL_REQUEST,
    });
    const query = offset ?
        `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&limit=50&apikey=37c21e2f4f5552df9929fbac286b8a39`
        :
        'https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=37c21e2f4f5552df9929fbac286b8a39'
      ;
    axios.get(query)
      .then((response) => {
        dispatch({
          type: Constants.FETCH_ALL_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: Constants.FETCH_ALL_FAILURE,
          payload: error,
        });
      });
  }  
}

