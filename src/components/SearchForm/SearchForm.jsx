import { useRef } from "react";
import { connect } from "react-redux"
import { updateInput } from "../../actions/searchActions";


const SearchForm = (props) => {
  const {
    autocomplete,
    inputText,
    updateInput
  } = props;

  

  const handleChange = (e) => {
    let inputText = e.target.value;
    updateInput(inputText);
  }

  console.log(props);
  return (
    <>
      <p>Search form</p>      
      <textarea  onChange = {handleChange} placeholder="search by name" value = {inputText}></textarea>
      <button>search</button>
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
    updateInput: (text) => dispatch(updateInput(text))
  }  
}

export default connect(mapState, mapDispatch)(SearchForm);