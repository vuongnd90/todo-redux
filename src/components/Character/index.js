import React from 'react';
import PropTypes from 'prop-types';

class Character extends React.Component {
  render() {
    return (
      <div className="card col-sm-3">
        <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
        <div className="card-body">
          <p className="card-text">{this.props.name}</p>
        </div>
      </div>
    )
  }
}

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired
}

export default Character;