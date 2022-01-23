import Autocomplete from "./AutocompleteList/Autocomlete";
import SearchButton from "./SearchButton/SearchButton";
import SearchInput from "./SearchInput/SearchInput";


const SearchForm = (props) => {

  return (
    <>
      <p>Search form</p>
      <SearchInput/>  
      <SearchButton />
      <Autocomplete />       
    </>
  )
}


export default SearchForm;