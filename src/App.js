import React from 'react';

import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
      <header className="App-header">
        Dictionary Project
      </header>
      <main> 
        <Dictionary defaultWord="shine"/>
      </main>
      <footer className="text-center mt-5"><small >Coded by Deni</small></footer>
    </div></div> 
  );
}

export default App;
