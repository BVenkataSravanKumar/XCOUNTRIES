import React, {useEffect,useState} from "react";
import "./App.css";

function App(){
  const [countries, setCountries]=useState([]);

  useEffect(()=>{
    const fectchCountries= async ()=>{
      try{
        const response= await fetch('https://xcountries-backend.azurewebsites.net/all');
        if(!response.ok){
          throw new Error(`${response.status}`);
        }
        const data= await response.json();
        setCountries(data);
      }catch(error){
        console.error('Error fetching data:', error);
      }
    };
    fectchCountries();
  },[]);

  return (
    <div className="container">
      {countries.map((country, index) => (
        <div className="card" key={index}>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            className="flag"
          />
          <p className="name">{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
