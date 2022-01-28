import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AutocompleteItem from "./AutocompleteItem/AutocompleteItem";
import AutocompleteMUI from '@mui/material/Autocomplete';
import SearchInput from "../SearchInput/SearchInput";


// TODO:
// 1) Make autocomplete walue get set to state, when option is clicked

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
      <AutocompleteMUI
        getOptionDisabled={option => option.id === null}
        renderInput={params => <SearchInput params={params} />}
        options={list}
        getOptionLabel={option => option.name}
        renderOption={
          (muiParams, option) => {
            return <AutocompleteItem
              muiParams={muiParams}
              name={option.name}
              status={option.status}
              characterId={option.id}
              key={`${option.id}-ac-item`}
            />
          }
        }
        handleHomeEndKeys={false}
      />
    </section>
  )
}


export default Autocomplete;