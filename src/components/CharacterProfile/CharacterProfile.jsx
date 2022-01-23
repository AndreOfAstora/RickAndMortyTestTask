import { useParams } from "react-router-dom";

const CharacterProfile = () => { 
  
  let params = useParams();

  return(
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