import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import Constants from '../constants/Constants';
import { fetchingData, fetchDataOK } from '../actions';


/*async */function fetchCharacters(offset=null) {

  const query = offset ?
        `https://gateway.marvel.com:443/v1/public/characters?offset=${offset}&limit=50&apikey=37c21e2f4f5552df9929fbac286b8a39`
        :
        'https://gateway.marvel.com:443/v1/public/characters?limit=50&apikey=37c21e2f4f5552df9929fbac286b8a39'
      ;
  // try {
  //   const response = await axios.get(query);
  //   console.log('response', response)
  //   // setTimeout(() => {
  //     return response.data;
  //   // }, 3000)
    
  // } catch (error) {
  //   console.log('ans hit di')
  // }  
  return axios.get(query);
}


function* getCharacters(data) {
  yield put(fetchingData());
  const characters = yield call(fetchCharacters, data.offset);
  yield put(fetchDataOK(characters.data))
  console.log('characters', characters.data)

}



export default function* root() {
  yield takeEvery(Constants.FETCH_CHARACTERS, getCharacters);
}