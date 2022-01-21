import { connect } from "react-redux"
import { getAutocompleteOptions, updateInput } from "../../actions/searchActions";


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

  const handleChange = (e) => {
    let inputText = e.target.value;
    getAutocompleteOptions(inputText);
  }


  return (
    <>
      <p>Search form</p>
      <textarea onChange={handleChange} placeholder="search by name" value={inputText}></textarea>
      <button>search</button>
      <section>
        <h3>
          {count} search results
          <p>by keyword <i>{keyword}</i></p>
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
    updateInput: (text) => dispatch(updateInput(text)),
    getAutocompleteOptions: (keyword) => dispatch(getAutocompleteOptions(keyword))
  }
}

export default connect(mapState, mapDispatch)(SearchForm);