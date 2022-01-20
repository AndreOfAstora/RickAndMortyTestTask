import { connect } from "react-redux"


const SearchForm = (props) => {
  console.log(props);
  return (
    <p>Search form</p>    
  )
}

const mapState = (state) => {
  return {
    inputText: state.search.inputText,
    autocomplete: state.search.autocomplete
  }
  
}

export default connect(mapState)(SearchForm);