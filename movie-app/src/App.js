import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header/Header';
import LandingPage from './layout/LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
import Movies from './pages/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
