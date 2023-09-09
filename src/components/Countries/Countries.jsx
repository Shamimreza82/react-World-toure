import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setvisitedCountries] = useState ([]); 
    const [visitedFlag, setvisitedFlags] = useState ([])

  
    useEffect (() => {
        fetch ('https://restcountries.com/v3.1/all')
        .then (res => res.json())
        .then (data => setCountries(data))
    },[])

    const handelVisitedCounteris = (country) => {
    console.log (country)
        console.log (" add this to your visited countery")
        const newVisitedCounterys = [...visitedCountries, country];
        setvisitedCountries (newVisitedCounterys)        
    }


    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlag, flag]
        setvisitedFlags (newVisitedFlags);
    }
    
    return (
        <div >
            <h3>Countries {countries.length}</h3>
            <div>
                <h4>Visited Countrys: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map (country => <li 
                            key={country.cca3}>
                                {country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map (flag => <img src={flag}></img>)
                }

            </div>
            {/* displed conrtd */}
            <div className="country-container">
            {
               countries.map(country => <Country 
                key={country.cca3}
                handelVisitedCounteris = {handelVisitedCounteris}
                handleVisitedFlags = {handleVisitedFlags}
                country = {country}></Country>) 
            }
            </div>
            
        </div>
    );
};

export default Countries;