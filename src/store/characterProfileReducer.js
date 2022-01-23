import { SET_CHARACTER_PROFILE } from "../actions/characterProfileInfoActions";

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
    case SET_CHARACTER_PROFILE:{
      let {
        id,
        name,
        species,
        gender,
        location,
        episode,
        status,
        created,
        image
      } = action.characterProfile;

      return {
        ...state,
        id,
        name,
        species,
        gender,
        location: { ...location },
        episode: [...episode],
        status,
        created,
        image
      }
    }
      

    default:
      return state;
  }
}


export default characterProfileReducer;