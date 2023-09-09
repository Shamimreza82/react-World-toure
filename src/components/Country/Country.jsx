
import { useState } from "react";
import "./country.css"
const Country = ({country}) => {
    const {name,flags, population, area, cca3 } = country;
    console.log (country)

    const [visited, setVisited] = useState (false)

    const handelVisited = () => {
        setVisited(!visited)
    }

    return (
        <div className="country">
            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p> area: {area} </p>
            <p> population: {population} </p>
            <p>Code: {cca3}</p>
            <button onClick={handelVisited}>{visited? "Visited" : " going"}</button>
            {visited ? " i have visited This Country" : "iwan to visit"}
        </div>
    );
};

export default Country;