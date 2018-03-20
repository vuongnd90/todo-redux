import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import './CharactersList.css';
import Loading from '../common/Loading/index';
import Character from '../Character'

class CharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.handlePageClick = this._handlePageClick.bind(this);
  }

  state = {
    currentPaginationPage: 0,
  }
  
  componentDidMount() {
    this.props.getCharactersFromAPI();
  }

  _handlePageClick(pageNum) {
    this.setState({
      currentPaginationPage: (pageNum.selected),
    }, () => {
      const offset = pageNum.selected * 50;
      this.props.getCharactersFromAPI(offset);
    });    
  }

  render() {
    const { isFetching, paginationParams } = this.props;
    if (isFetching) {
      return <Loading/>;
    }
    return (
      <div>
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
        <ReactPaginate 
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={paginationParams.totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          forcePage={this.state.currentPaginationPage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />
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