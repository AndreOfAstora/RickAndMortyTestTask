import { connect } from "react-redux";
import Character from "../Character/Character";


const CharacterList = (props) => {
  let characters = props.characters;

  console.log(props.characters);
  return (
    <>
      <p>charlist</p>
      {characters.map(ch =>
        <Character key={ch.id} character={ch} />
      )}
    </>
  )  
}

const mapStateToProps = (state) => {
  return {
    characters: state.characterList.characters
  }
}

export default connect(mapStateToProps)(CharacterList);
