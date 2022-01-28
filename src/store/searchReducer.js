import { SET_AUTOCOMPLETE, UPDATE_INPUT } from "../actions/searchActions";


let initialState = {
  inputText:'',
  autocomplete: {
    list: [
      {
        id: null,
        name: '',
        status: ''
      }
    ],
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
          list: action.autocomplete.list
          .map(ch => 
            ({
              id: ch.id,
              name: ch.name,
              status: ch.status
            })
          ),
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