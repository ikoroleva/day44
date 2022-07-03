import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

export function Detailed() {

    const [details, setDetails] = useState(null);
    const params = useParams();


    const url = `https://restcountries.com/v3.1/alpha/${params.code}`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setDetails(data[0]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="country-detailed">

            {details &&
                <>
                    <h2>{details.name.common}</h2>
                    <div className="flag">
                        <img width={200} height={200} src={details.flags.svg} alt="flag"></img>
                    </div>
                    <p>Official name: {details.official}</p>
                    <p>Capital: {details.capital}</p>
                    <p>Population: {details.population}</p>
                    <p>Region: {details.region}</p>
                    <p>Subregion: {details.subregion}</p>
                    <div>
                        {/* {currencies.map((item, i) =>
                            (<div key={i}>{item[0]}</div>))
                        } */}
                        {
                            Object.keys(details.currencies).map((key, item) => (

                                <p key={key}>Currency: {details.currencies[key].name}</p>))
                        }

                    </div>
                </>
            }
        </div>

    )
}