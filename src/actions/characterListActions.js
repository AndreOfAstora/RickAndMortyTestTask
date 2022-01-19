export const APPEND_CHARACTER_LIST = 'APPEND_CHARACTER_LIST';
export const SET_CHARACTER_LIST = 'SET_CHARACTER_LIST';


export const appendCharacterList = (characters) => {
  return { type: APPEND_CHARACTER_LIST, characters }
}



export const setCharacterList = (characters) => {
  return { type: SET_CHARACTER_LIST, characters }
}

