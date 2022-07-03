import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function SearchResults() {

    const [searchResults, setSearchResults] = useState([]);
    const [offset, setOffset] = useState(0);
    const params = useParams();

    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${params.query}&sroffset=${offset}`;

    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.query.search);
        //console.log(offset);
        setSearchResults(data.query.search);
    }

    useEffect(() => {
        fetchData();
    }, [params.query, offset]);


    return (
        <div className="results-container">
            <button
                disabled={offset === 0}
                onClick={() => setOffset(offset === 0 ? offset : offset - 10)}>
                Previous
            </button>
            <button onClick={() => setOffset(offset + 10)}>Next</button>
            {searchResults &&

                <ul>
                    {searchResults.map((item, i) =>
                    // (<li key={i}> {item.title}</li>))
                    (<li key={i}><a href={`https://en.wikipedia.org/wiki/${item.title}`} target='_blank'>{item.title}</a>
                        <div dangerouslySetInnerHTML={{ __html: item.snippet }} /><br />
                    </li>))
                    }

                </ul>

            }

        </div >)
}