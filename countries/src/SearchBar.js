//import { useState } from "react";
import { Link } from 'react-router-dom';


export function SearchBar({ setSearchQuery, searchQuery }) {
    return (
        <div className="search-container">
            <input className="search" type="text" name="search" autoComplete="off" onChange={(e) => setSearchQuery(e.target.value)}></input>

            <Link to={`./search/${searchQuery}`}>Search</Link>

        </div>)
}