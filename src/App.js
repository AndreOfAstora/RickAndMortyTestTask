import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import SearchForm from './components/SearchForm/SearchForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>APP</p>
      <SearchForm />
      <Routes>
        <Route path = '/'  element = {<CharacterList />}/>              
        <Route path = 'search/:keyword'  element = {<CharacterList />}/>       
      </Routes>     
    </div>
  );
}

export default App;
