import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCharacters, getAllCharactersByKeyword } from "../../actions/characterListActions";
import Character from "./Character/Character";


const CharacterList = (props) => {
  const {
    characters,
    getAllCharacters,
    getAllCharactersByKeyword
  } = props;

  let params = useParams();  

  useEffect(() => {    
    if (params.keyword === undefined) {      
      getAllCharacters();
    } else {      
      getAllCharactersByKeyword(params.keyword);
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

const mapState = (state) => {
  return {
    characters: state.characterList.characters
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAllCharacters: () => dispatch(getAllCharacters()),
    getAllCharactersByKeyword: keyword => dispatch(getAllCharactersByKeyword(keyword))
  }
}

export default connect(mapState, mapDispatch)(CharacterList);
