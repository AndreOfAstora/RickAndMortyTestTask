import { useEffect } from "react";
import { connect } from "react-redux";
import { setCharacterList } from "../../actions/characterListActions";
import Character from "../Character/Character";


const CharacterList = (props) => {
  const {
    characters,
    setCharacterList
  } = props;

  let mockResponse = [
    { id: 1, name: 'Rick Sanchez', status: 'Alive' },
    { id: 2, name: "Morty Smith", status: "Alive" },
    { id: 3, name: 'Summer Smith', status: 'Alive' },
    { id: 4, name: "Beth Smith", status: "Alive" },
    { id: 5, name: "Jerry Smith", status: "Alive" },
    { id: 6, name: "Abadango Cluster Princess", status: "Alive" },
    { id: 7, name: "Abradolf Lincler", status: "unknown" },
    { id: 21, name: "Aqua Morty", status: "unknown" },
    { id: 22, name: "Aqua Rick", status: "unknown" },
    { id: 23, name: "Arcade Alien", status: "unknown" },
    { id: 24, name: "Armagheadon", status: "Alive" },
    { id: 25, name: "Armothy", status: "Dead" },
    { id: 26, name: "Arthricia", status: "Alive" },
    { id: 27, name: "Artist Morty", status: "Alive" }
  ];

  useEffect(() => {
    //should get all characters for the first time.
    setCharacterList(mockResponse);
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
    setCharacterList: (characters) => dispatch(setCharacterList(characters)),
  }
}

export default connect(mapState, mapDispatch)(CharacterList);
