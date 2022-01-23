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
    <>
      <img src={image} alt= {`Photo of ${name}`} />
      <p>{`ID: ${id}`}</p>
      <p>{`${name}`}</p>
      <p>{`${species}`}</p>
      <p>{`${gender}`}</p>
      <p>{`${location.name}`}</p>
      <p>{`${episode.length+1}`}</p>
      <p>{`${status}`}</p>
      <p>{`${created}`}</p>
    </>
  )
}


export default CharacterProfile;