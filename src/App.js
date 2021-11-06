import React from 'react';

import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="App-container">
      <header className="App-header">
        Dictionary Project
      </header>
      <main> 
        <Dictionary defaultWord="sea"/>
      </main>
      <footer className="text-center mt-5"><small >Coded by <a href="https://github.com/Deni-ux/dictionary-project" target="_blank" rel="noreferrer">
        Deni</a> </small></footer>
    </div></div> 
  );
}

export default App;
