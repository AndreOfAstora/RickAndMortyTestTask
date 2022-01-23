import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  return(
    <button onClick={handleBtnClick}>search</button>
  )
}


export default SearchButton;