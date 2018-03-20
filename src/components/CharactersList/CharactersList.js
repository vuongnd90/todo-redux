import React from 'react';
import PropTypes from 'prop-types';
import './CharactersList.css';
import Loading from '../common/Loading/index';
import Character from '../Character'

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
      <div className="row">
        {
          this.props.characters.map(character => (
            <Character 
              key={character.id}
              name={character.name}
              image={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}/>
          ))
        }
      </div>
    )
  }
}

CharactersList.propTypes = {
  isFetching: PropTypes.bool,
  getCharactersFromAPI: PropTypes.func,
  characters: PropTypes.array,
}

CharactersList.defaultProps = {
  isFetching: true,
  getCharactersFromAPI: () => {},
  characters: [],
}

export default CharactersList;