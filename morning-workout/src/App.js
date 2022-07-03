import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {

  const [searchQuery, setSearchQuery] = useState("");



  return (
    <div>
      <BrowserRouter>
        <nav style={{ width: '100%', background: 'grey', marginBottom: 20, padding: 8 }}>
          <Link to="/">Home</Link>
        </nav>
        <SearchBar
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
        {/**YOu do not watn to pass properties to Route elements, you always fetch data in particular component based on the variables in url */}
        <Routes>
          <Route path="/search-results/:query" element={<SearchResults />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
