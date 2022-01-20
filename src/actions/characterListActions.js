import { charactersAPI } from "../utils/api/api";

export const APPEND_CHARACTER_LIST = 'APPEND_CHARACTER_LIST';
export const SET_CHARACTER_LIST = 'SET_CHARACTER_LIST';


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

window.getAllUsers = getAllCharacters;
