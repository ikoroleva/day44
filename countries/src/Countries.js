import { useEffect, useState } from "react";
import { Country } from "./Country";

export function Countries() {

    const [searchResults, setSearchResults] = useState([]);

    const url = `https://restcountries.com/v3.1/all`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setSearchResults(data);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="result-container">

            {searchResults &&
                <div>
                    {searchResults.map((item, i) =>
                        (<Country key={i} data={item} />))
                    }

                </div>
            }
        </div >)
}