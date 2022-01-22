import { useEffect } from "react";
import { connect, shallowEqual } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCharacters, getAllCharactersByKeyword } from "../../actions/characterListActions";
import Character from "./Character/Character";


const CharacterList = (props) => {
  
  const dispatch = useDispatch();

  const characters = useSelector(state => state.characterList.characters);

  let params = useParams();  

  useEffect(() => {    
    if (params.keyword === undefined) {      
      dispatch(getAllCharacters());
    } else {      
      dispatch(getAllCharactersByKeyword(params.keyword));
    }    
  }, [params]);

  
  return (
    <>
      <p>charlist</p>
      {characters.map(ch =>
        <Character key={ch.id} character={ch} />
      )}
    </>
  )
}



export default CharacterList;
