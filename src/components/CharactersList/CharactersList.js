import React from 'react';
import PropTypes from 'prop-types';
import './CharactersList.css';
import Loading from '../common/Loading/index';

class CharactersList extends React.Component {
  componentDidMount() {
    this.props.getCharactersFromAPI();
  }


  render() {
    const { isFetching } = this.props;
    if (isFetching) {
      return <Loading/>;
    }
    return (
      <div>
        <div>This is Marvel</div>        
      </div>
    )
  }
}

CharactersList.propTypes = {
  isFetching: PropTypes.bool,
  getCharactersFromAPI: PropTypes.func,
}

CharactersList.defaultProps = {
  isFetching: true,
  getCharactersFromAPI: () => {},
}

export default CharactersList;