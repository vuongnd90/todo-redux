import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import Constants from '../constants/Constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Constants.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    
    case Constants.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);

    case Constants.SHOW_ALL:
    default:
      return todos;
  }
}

const  mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispath => {
  return {
    onTodoClick: id => {
      dispath(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;