import Autocomplete from "./AutocompleteList/Autocomlete";
import SearchButton from "./SearchButton/SearchButton";


const SearchForm = (props) => {

  return (
    <>
      <p>Search form</p>
      <SearchButton />
      <Autocomplete />       
    </>
  )
}


export default SearchForm;