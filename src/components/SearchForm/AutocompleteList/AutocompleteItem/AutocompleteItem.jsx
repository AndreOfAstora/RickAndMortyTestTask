import { Link } from "react-router-dom";

// TODO:
// 1) Remove underscore
// 2) Make "No options" match MUI default


const AutocompleteItem = (props) => {
  const {
    characterId,
    name,
    status
  } = props;


  return (
    <>{      
      <Link {...props.muiParams} to={`/characterProfile/${characterId}`}>
        {(characterId === null) 
          ? "No options"
          : `${name} - ${status}`}          
      </Link>
    }</>
    
  )
}


export default AutocompleteItem;