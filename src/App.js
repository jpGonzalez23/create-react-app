import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'

import { Link, Router } from "wouter"

function App() {
  return (
    <div className="App">
      <section className="App-content">
        {
          <>
            <Link to='gif/panda'></Link>
            <Link to='gif/osos'></Link>
            <Link to='gif/panda'></Link>
            <Router
              component={ListOfGifs}
              path="/gif/:keyword" />
          </>
        }
      </section>
    </div>
  );
}

export default App;
