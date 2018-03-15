import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this._onSubmit.bind(this);

  }

  _onSubmit(e) {
    e.preventDefault();
    if (!this.input.value.trim()) return;
    this.props.addTodo(this.input.value);
    this.input.value = '';
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={node => this.input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;