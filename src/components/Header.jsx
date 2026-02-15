import { Link } from 'react-router-dom';
import { useState } from 'react';
import { searchMovies } from '../services/movieService';

function Header({ setSearchResults }) {
  const [query, setQuery] = useState("");

  async function handleSearch() {
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="app-title">MovieShelf</Link>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favorites" className="nav-link">Favorites</Link>
          <Link to="/watchlist" className="nav-link">Watchlist</Link>
        </nav>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search movies..."
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
