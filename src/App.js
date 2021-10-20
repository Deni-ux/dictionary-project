import React from 'react';

import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header text-center">
        Dictionary Project
      </header>
      <main> 
        <Dictionary />
      </main>
      <footer className="text-center"><small>Coded by Deni</small></footer>
    </div></div> 
  );
}

export default App;
