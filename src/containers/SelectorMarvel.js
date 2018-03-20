import { createSelector } from 'reselect';

export const getCharacters = state => state.characters.items;

export const getPaginationParams = (state) => {
  return {
    totalPages: Math.ceil(state.characters.meta.totalRecords / 50),
  };
};