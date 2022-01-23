import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import SearchForm from './components/SearchForm/SearchForm';
import { Route, Routes } from 'react-router-dom';
import CharacterProfile from './components/CharacterProfile/CharacterProfile';

function App() {
  return (
    <div className="App">
      <p>APP</p>
      <SearchForm />
      <Routes>
        <Route path = '/'  element = {<CharacterList />} />
        <Route path = 'search/:keyword'  element = {<CharacterList />} />
        <Route path = 'characterProfile/:characterId' element = {<CharacterProfile />} />
      </Routes>     
    </div>
  );
}

export default App;
