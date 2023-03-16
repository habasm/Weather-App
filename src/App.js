import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import Details from './components/pages/Details';
import './App.css';

function App() {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
}

export default App;
