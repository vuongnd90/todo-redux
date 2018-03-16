import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FooterContainer from '../containers/FooterContainer';

const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <FooterContainer/>
    </div>
  )
}

export default TodoApp;