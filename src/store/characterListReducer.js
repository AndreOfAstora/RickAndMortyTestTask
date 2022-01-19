

let initialState = {
  characters: [
    {id: 1, name: 'Rick Sanchez', status: 'Alive'},
    {id: 2, name: "Morty Smith", status: "Alive"},
    {id: 3, name: 'Summer Smith', status: 'Alive'},    
    {id: 4, name: "Beth Smith", status: "Alive"},
    {id: 5, name: "Jerry Smith", status: "Alive"},
    {id: 6, name: "Abadango Cluster Princess", status: "Alive"},
    {id: 7, name: "Abradolf Lincler", status: "unknown"}
  ]
  // total count
  // pages count
}

const characterListReducer = (state = initialState, action) => {
  switch (action) {


    default:
      return state;
  }
}


export default characterListReducer;