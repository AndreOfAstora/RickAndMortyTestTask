import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterProfile } from "../../actions/characterProfileInfoActions";

const CharacterProfile = () => {

  const {
    id,
    name,
    species,
    gender,
    location,
    episode,
    status,
    created,
    image
  } = useSelector(state => state.characterProfile);

  const dispatch = useDispatch();
  // window.characterProfile = characterProfile;
  let params = useParams();
 

  useEffect(() => {
    dispatch(getCharacterProfile(params.characterId));
  }, [params]);


  return (
    <p>
      {
        `${(params.characterId === undefined)
          ? 'no id parsed'
          : params.characterId
        }`
      }
    </p>
  )
}


export default CharacterProfile;