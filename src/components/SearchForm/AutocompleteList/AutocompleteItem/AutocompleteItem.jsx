

const AutocompleteItem = (props) => { 
  const {
    name,
    status
  } = props;
  

  return(
  <p>
      {`${name} ${status}`}
  </p>  
  )
}


export default AutocompleteItem;