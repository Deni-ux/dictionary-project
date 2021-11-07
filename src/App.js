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
        Denisa Haka</a> and is  <a href="https://github.com/Deni-ux/dictionary-project" target="_blank" rel="noreferrer">open-sourced in Github</a> and deployed on  <a href="https://dictionary-react-project.netlify.app/" target="_blank" rel="noreferrer">Netlify </a></small></footer>
    </div></div> 
  );
}

export default App;
