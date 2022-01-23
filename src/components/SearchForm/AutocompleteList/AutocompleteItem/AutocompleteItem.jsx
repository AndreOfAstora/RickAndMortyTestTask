import { Link } from "react-router-dom";


const AutocompleteItem = (props) => {
  const {
    id,
    name,
    status
  } = props;


  return (
    <Link to={`/characterProfile/${id}`}>
      <p>
        {`${name} ${status}`}
      </p>
    </Link>
  )
}


export default AutocompleteItem;