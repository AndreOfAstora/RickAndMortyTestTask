import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AutocompleteItem from "./AutocompleteItem/AutocompleteItem";


const Autocomplete = () => {

  const {
    autocomplete    
  } = useSelector(state => ({
    autocomplete: state.search.autocomplete
  })  
  );

  const {
    list,
    count,
    keyword
  } = autocomplete;

  return (
    <section>
      <h3>        
        <Link to={`search/${keyword}`}>
          <p>
            {count} search results by keyword <i>"{keyword}"</i>
          </p>
        </Link>
      </h3>
      {
        (list.length === 0)
          ? null
          : list.map(ch =>            
            <AutocompleteItem name = {ch.name} status = {ch.status} />
          )
      }
    </section>
  )
}


export default Autocomplete;