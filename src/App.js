import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import "./App.css";
import Counter from './Components/Counter';
import NameGenerator from './NameGenerator/NameGenerator';

const ROOT_PATH = "/";
const NAMES_PATH = "/names";
function App() {

  return (
    <>
      <nav>
        <Link to="/">Compteur</Link>
        <Link to="/names">Générateur de noms</Link>
      </nav>
      <main className='App'>
        <Routes>
          <Route path={ROOT_PATH} element={<Counter />} />
          <Route path={NAMES_PATH} element={<NameGenerator />} />
        </Routes>
      </main>
    </>
  );
};


export default App;