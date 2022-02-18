import React, { useEffect, useState } from 'react';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import { Route, Routes } from 'react-router-dom';

import Main from './components/Pages/Main';
import About from './components/Pages/About';
import PageNotFound from './components/Pages/PageNotFound';

import { getResults } from './services/pixaBayServices';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [query, setQuery] = useState('cat');
  const [searchResults, setSearchResults] = useState([]);
  let [page, setPage] = useState(1);
  const [perPage] = useState(20);

  async function getSearch() {
    const results = await getResults(query, page, perPage);
    setSearchResults(results.data.hits);
    console.log(results.data.hits);
  }

  const handleSearch = (e) => {
    console.log(e);
    setQuery(e.target.value);
    getSearch();
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/" element={<Main data={searchResults} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
