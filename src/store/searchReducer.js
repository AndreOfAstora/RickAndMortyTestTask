import { SET_AUTOCOMPLETE, UPDATE_INPUT } from "../actions/searchActions";


let initialState = {
  inputText:'',
  autocomplete: {
    list: [],
    keyword: '',
    count: 0 
  }
}


const searchReducer = (state = initialState, action) => {

  switch (action.type){
    case SET_AUTOCOMPLETE:
      return {
        ...state,
        autocomplete:{
          list: action.autocomplete.list,
          keyword: action.autocomplete.keyword,
          count: action.autocomplete.count
        }
      }
    case UPDATE_INPUT:
      return {
        ...state,
        inputText: action.inputText
      }

    default:
      return state;
  }

}

export default searchReducer;