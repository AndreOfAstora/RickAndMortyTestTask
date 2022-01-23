import { useDispatch, useSelector } from "react-redux";
import { getAutocompleteOptions } from "../../../actions/searchActions";


const SearchInput = () => {
  const dispatch = useDispatch();

  const {
    inputText
  } = useSelector(state => ({    
    inputText: state.search.inputText
  })  
  );

  const handleChange = (e) => {
    let inputText = e.target.value;
    dispatch(getAutocompleteOptions(inputText));    
  }

  return(
    <textarea onChange={handleChange} placeholder="search by name" value={inputText}></textarea>
  )
}


export default SearchInput;