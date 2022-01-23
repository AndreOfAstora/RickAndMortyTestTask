let initialState = {
  id: null,
  name: '',
  species: '',
  gender: '',
  location: {
    name: '',
    url: ''
  },
  episode: [],
  status: '',
  created: '',
  image: ''
}


const characterProfileReducer = (state = initialState, action) => {

  switch (action.type){
    

    default:
      return state;
  }

}

export default characterProfileReducer;