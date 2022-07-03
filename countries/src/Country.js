import { Detailed } from "./Detailed";
import { Link } from 'react-router-dom';


export function Country({ data }) {

    const { common, official } = data.name;
    const { cca3, capital, population, region, subregion, currencies, languages } = data;

    return (
        <div className="country">
            {data &&
                <><h2>
                    <Link to={`./country/${cca3}`}>{common}</Link></h2>
                    <div className="flag">
                        <img width={200} height={200} src={data.flags.svg} alt="flag"></img>
                    </div>
                    <p>Official name: {official}</p>
                    <p>Capital: {capital}</p>
                    <p>Population: {population}</p>
                    <p>Region: {region}</p>
                    <p>Subregion: {subregion}</p>
                    <div>
                        {/* {currencies.map((item, i) =>
                            (<div key={i}>{item[0]}</div>))
                        } */}
                    </div>
                </>
            }
        </div>

    )
}
