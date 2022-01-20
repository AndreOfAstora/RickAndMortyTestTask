import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
      <p>APP</p>
      <SearchForm />
      <CharacterList />
    </div>
  );
}

export default App;
