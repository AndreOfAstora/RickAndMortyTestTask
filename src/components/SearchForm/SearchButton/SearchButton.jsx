import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

// TODO:
// 1) Navigate using inputTexn in store, make sure, it's set before autocomplete is fetched

const SearchButton = () => {

  let navigate = useNavigate();

  const keyword = useSelector(state =>
    state.search.autocomplete.keyword
  );


  const handleBtnClick = () => {
    navigate(`search/${keyword}`);
  }

  return (<>
    <Button
      variant='outlined'
      onClick={handleBtnClick}>
        search
    </Button>
  </>)
}


export default SearchButton;