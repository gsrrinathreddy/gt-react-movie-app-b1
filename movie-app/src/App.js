import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header/Header';
import LandingPage from './layout/LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
