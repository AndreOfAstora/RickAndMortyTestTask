import { characterProfileAPI } from "../utils/api/api";


export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';

export const setCharacterProfile = (characterProfile) => ({
  type: SET_CHARACTER_PROFILE, characterProfile
})


export const getCharacterProfile = (id) => async (dispatch) => { 
  const response = await characterProfileAPI.getCharacterProfile(id);

  dispatch(setCharacterProfile(response));
}


// window.setCharacterProfile = setCharacterProfile;
// window.getCharacterProfile = getCharacterProfile;

