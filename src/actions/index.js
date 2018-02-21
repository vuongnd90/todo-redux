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

