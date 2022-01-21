import { charactersAPI } from "../utils/api/api";

export const APPEND_CHARACTER_LIST = 'APPEND_CHARACTER_LIST';
export const SET_CHARACTER_LIST = 'SET_CHARACTER_LIST';


// TODO:

// 1) figure out a way to reuse getAllChracters... thunks, they are basically copy paste.


export const appendCharacterList = (characters) => {
  return { type: APPEND_CHARACTER_LIST, characters }
}



export const setCharacterList = (characters) => {
  return { type: SET_CHARACTER_LIST, characters }
}



export const getAllCharacters = () => async (dispatch) => {
  const {results, info} = await charactersAPI.getCharactersWithInfo();
  dispatch(setCharacterList(results));

  for (let i = 2; i <= info.pages; i++) {
    const response = await charactersAPI.getCharacters(i);
    dispatch(appendCharacterList(response));
  }
  
}


export const getAllCharactersByKeyword = (keyword) => async (dispatch, getState) => {  
  const {results, info} = await charactersAPI.getCharactersByKeywordWithInfo(keyword);
  dispatch(setCharacterList(results));

  for (let i = 2; i <= info.pages; i++) {
    const response = await charactersAPI.getCharactersByKeyword(keyword, i);
    dispatch(appendCharacterList(response));
  }
} 

window.getAllCharacters = getAllCharacters;
window.getAllCharactersByKeyword = getAllCharactersByKeyword;
