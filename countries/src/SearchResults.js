import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Country } from "./Country";

export function SearchResults() {

    const [searchResults, setSearchResults] = useState([]);
    const params = useParams();

    //console.log(params);

    const url = `https://restcountries.com/v3.1/name/${params.query}`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.message) {
            alert(data.message);
        } else {
            setSearchResults(data);
        }

        console.log(data);
    }
    //setSearchResults(data);


    useEffect(() => {
        fetchData();
    }, [params.query]);



    return (
        <div className="results-container">

            {searchResults
                ?
                <div>
                    {searchResults.map((item, i) =>
                        (<Country key={i} data={item} />))
                    }

                </div>
                : <></>
            }

        </div >)
}