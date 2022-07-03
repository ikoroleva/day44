import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Country } from './Country';
import { Countries } from './Countries';
import { Detailed } from './Detailed';
import { SearchRegions } from './SearchRegions';


function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchRegion, setSearchRegion] = useState("");


  return (
    <div className="App">

      <BrowserRouter>
        <nav style={{ width: '100%', background: 'grey', marginBottom: 20, padding: 8 }}>
          <Link to="/">Home</Link>
        </nav>
        <SearchBar setSearchQuery={setSearchQuery}
          searchQuery={searchQuery} />
        {/* <SearchResults searchResults={searchResults} /> */}
        <div>
          <select name="regions" id="regions" onChange={(e) => setSearchRegion(e.target.value)}>
            <option value="" selected>Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Europe</option>
          </select>
          <Link to={`./search/${searchRegion}`}>Search</Link>
        </div>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/search/:region" element={<SearchRegions />} />
          <Route path="/country/:code" element={<Detailed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
