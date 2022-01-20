import { useEffect } from "react";
import { connect } from "react-redux";
import { getAllCharacters } from "../../actions/characterListActions";
import Character from "./Character/Character";


const CharacterList = (props) => {
  const {
    characters,
    getAllCharacters
  } = props;

  useEffect(() => {
    //should get all characters for the first time.
    // setCharacterList(mockResponse);
    getAllCharacters();
  }, [])


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
  }
}

export default connect(mapState, mapDispatch)(CharacterList);
