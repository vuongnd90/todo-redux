import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.removeTodo = this._removeTodo.bind(this);
  }

  _removeTodo(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.removeTodo();
  }

  render() {
    const {onClick, completed, text } = this.props;
    return (
      <li
        style={{textDecoration: completed ? 'line-through' : 'none'}}
        onClick={onClick}>
        {text}
        <a
          href=""
          onClick={this.removeTodo}>Delete</a>
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;