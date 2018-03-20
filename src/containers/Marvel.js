import React from 'react';
import { connect } from 'react-redux';
import CharactersList from '../components/CharactersList/CharactersList';
import { getCharacters as getCharactersFromAPI } from '../actions';
import { getCharacters, getPaginationParams } from './SelectorMarvel';

const mapStateToProps = (state) => ({
  isFetching: state.characters.isFetching,
  characters: getCharacters(state),
  paginationParams: getPaginationParams(state),
});

const mapDispatchToProps = (dispath) => ({
  getCharactersFromAPI: offset => dispath(getCharactersFromAPI(offset))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);