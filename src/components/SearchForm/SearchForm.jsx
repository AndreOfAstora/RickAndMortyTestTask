import { useSelector } from "react-redux";
import { shallowEqual } from "react-redux";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { getAutocompleteOptions } from "../../actions/searchActions";


const SearchForm = (props) => {
  
  const dispatch = useDispatch();

  const {
    autocomplete,
    inputText
  } = useSelector(state => ({
    autocomplete: state.search.autocomplete,
    inputText: state.search.inputText
  })  
  );

  const {
    list,
    count,
    keyword
  } = autocomplete;

  let navigate = useNavigate();

  
  const handleChange = (e) => {
    let inputText = e.target.value;
    dispatch(getAutocompleteOptions(inputText));    
  }

  const handleBtnClick = () => {    
    navigate(`search/${keyword}`);
  }


  return (
    <>
      <p>Search form</p>
      <textarea onChange={handleChange} placeholder="search by name" value={inputText}></textarea>
      <button onClick={handleBtnClick}>search</button>
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
          ?null
          :list.map(ch => <p>
            {ch.name + ' ' + ch.status}
          </p>)
        }
      </section>

    </>
  )
}


export default SearchForm;