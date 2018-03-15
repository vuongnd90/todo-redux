import React from 'react';

import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodo from '../components/AddTodo';

const mapDispatchToProps = dispath => {
  return {
    addTodo: (text) => {
      dispath(addTodo(text))
    }
  }
}

const AddTodoContainer = connect(
  null,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;