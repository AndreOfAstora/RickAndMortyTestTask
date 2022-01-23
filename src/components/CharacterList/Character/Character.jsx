import { Link } from "react-router-dom";


const Character = (props) => {
  const { 
    id,
    name,
    status } = props.character;

  return (
    <Link to = {`/characterProfile/${id}`}>
      <p>
        {name + ' ' + status}
      </p>
    </Link>    
  )
}

export default Character;