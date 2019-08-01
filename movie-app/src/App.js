import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Header from './layout/Header/Header';
import LandingPage from './layout/LandingPage/LandingPage';
import Footer from './layout/Footer/Footer';
import Movies from './pages/Movies/Movies';
import Login from "./components/Login";
import Songs from './pages/Songs/Songs';
import Categories from './pages/Categories/Categories';
import TVShows from './pages/TV Shows/TVShows';
import Events from './pages/Events/Events';
import Register from './pages/auth/Register/Register';
import Profile from './profiles/Profile/Profile';
function App() {
  return (

    <div className="App">
      <Router>
        <Header/>
            <Route path="/home" component={LandingPage}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/songs" component={Songs}/>
            <Route path="/tv-shows" component={TVShows}/>
            <Route path="/events" component={Events}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Profile}/>
            
        <Footer/>
     
      </Router>
      
    </div>
  );
}
const AppInstance = new App();
console.log("Hi I am App",AppInstance)
export default App;
