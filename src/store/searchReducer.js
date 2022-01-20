

let initialState = {
  inputText:'',
  autocomplete: {
    list: [],
    label: {
      keyword: '',
      count: 0
    }
  }
}


const searchReducer = (state = initialState, action) => {

  switch (action.type){
    

    default:
      return state;
  }

}

export default searchReducer;