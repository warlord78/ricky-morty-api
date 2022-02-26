import imageRickMorty from './img/rickymorty1.png';
import './App.css';
import { useState } from 'react';
import Characters from './Components/Characters';

function App() {
  
  const [characters, setCharacters] = useState(null);
  const reqApi = async() => {
  const api = await fetch('https://rickandmortyapi.com/api/character');
  const characterApi = await api.json();
  setCharacters(characterApi.results); 
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick y Morty</h1>
      {characters ?(
        <Characters characters={characters} setCharacters={setCharacters}/>
      ):(
      <>
      <img src={imageRickMorty} alt="Rick y Morty" className='img-home' />
      <button onClick={reqApi} className="btn-search">
        Buscar Personajes
      </button>
      </>
      )}     
      </header>
    </div>
  );
}

export default App;
