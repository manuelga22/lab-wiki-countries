import React, { Component } from 'react';
import countries from '../countries.json'
import './CountryDetail.css'
import {Link} from 'react-router-dom';


class CountryDetails extends Component{
constructor(props){
  super(props);
  this.state={
 
  }
}

getInfo=()=>{
  console.log("props in details --------------- ", this.props)
  let theCountries = [...countries];
  let countryClicked = this.props.match.params.id;
  let nameOfCountry = "";
  let capitalOfCountry="";
  let surfaceOfCountry=0;
  console.log('country:', countryClicked)
  theCountries.forEach(function(country){
     if(country.cca3 === countryClicked){
      nameOfCountry = country.name.common;
      capitalOfCountry = country.capital[0];
      surfaceOfCountry = country.area
     } 
  });
 
 return(
   <div class="country-info">
  <p>name: {nameOfCountry}</p>
  <p>capital: {capitalOfCountry}</p>
  <p>area: {surfaceOfCountry}</p>
  </div>
 );
}

 render(){
 
return(
  
<div>
  {this.getInfo()}
</div>
);
 }

}

export default CountryDetails;