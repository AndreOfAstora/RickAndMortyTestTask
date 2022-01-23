import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


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
          : list.map(ch => <p>
            {ch.name + ' ' + ch.status}
          </p>)
      }
    </section>
  )
}


export default Autocomplete;