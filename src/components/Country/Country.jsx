
import { useState } from "react";
import "./country.css"


const Country = ({country,  handelVisitedCounteris, handleVisitedFlags}) => {
    const {name,flags, population, area, cca3} = country;
    // console.log (country)

    const [visited, setVisited] = useState (false)

    const handelVisited = () => {
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited && 'vivited'}`}>
            <h2 style={{color: visited ? "red" : 'white' }}>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p> area: {area} </p>
            <p> population: {population} </p>
            <p>Code: {cca3}</p>
            <button onClick={() => handelVisitedCounteris(country)}>Mark Visited</button> <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
            <br />
            <button onClick={handelVisited}>{visited? "Visited" : " going"}</button>
            {visited ? " i have visited This Country" : "iwan to visit"}
        </div>
    );
};

export default Country;