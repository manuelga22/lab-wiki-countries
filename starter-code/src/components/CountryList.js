import React from 'react';
import countries from '../countries.json'
import {Link} from 'react-router-dom';
function displayCountries(){

  const theCountries= [...countries];
  const displayCountries = ()=>{
    return theCountries.map((country)=>{
       return(       
         <p><Link to={`/CountryDetail/${country.cca3}`}>{country.flag} {country.name.common}</Link></p>   
       );
    });
 }
return(
  <div class="countries">
  {displayCountries()}
</div>

);
  
}

export default displayCountries;