import { connect } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { getAutocompleteOptions } from "../../actions/searchActions";


const SearchForm = (props) => {
  const {
    autocomplete,
    inputText,
    getAutocompleteOptions
  } = props;

  const {
    list,
    count,
    keyword
  } = autocomplete;

  let navigate = useNavigate();

  const handleChange = (e) => {
    let inputText = e.target.value;
    getAutocompleteOptions(inputText);
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

const mapState = (state) => {
  return {
    inputText: state.search.inputText,
    autocomplete: state.search.autocomplete
  }
}

const mapDispatch = (dispatch) => {
  return {
    getAutocompleteOptions: (keyword) => dispatch(getAutocompleteOptions(keyword))
  }
}

export default connect(mapState, mapDispatch)(SearchForm);