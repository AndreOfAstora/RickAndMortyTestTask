import { useDispatch, useSelector } from "react-redux";
import { getAutocompleteOptions } from "../../../actions/searchActions";
import TextField from '@mui/material/TextField';

const SearchInput = (props) => {
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
    <TextField
      {...props.params}      
      onChange={handleChange}
      variant='outlined'
      placeholder="search by name"
      value={inputText}
    >
    </TextField>
  )
}


export default SearchInput;