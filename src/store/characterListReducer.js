import { APPEND_CHARACTER_LIST, SET_CHARACTER_LIST } from "../actions/characterListActions";


let initialState = {
  characters: [
    
  ]
  // total count
  // pages count
}

const characterListReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPEND_CHARACTER_LIST:
      return {
        ...state,
        characters: [
          ...state.characters,
          ...action.characters
        ]
      };

    case SET_CHARACTER_LIST:
      return {
        ...state,
        characters: action.characters
      };

    default:
      return state;
  }
}


export default characterListReducer;