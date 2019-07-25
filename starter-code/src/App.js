import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CountryDetail from './components/CountryDetail';
import NavBar from './components/navBar';
import { Switch, Route } from 'react-router-dom';
import CountryList from './components/CountryList'

class App extends Component {





  render() {
    return (
      <div className="App">
       <NavBar />
        <div className = "listOfCountries">
        <CountryList/>
        <Route exact path="/countryDetail/:id" component={CountryDetail} ></Route>
       </div>
      </div>
    );
  }
}

export default App;
