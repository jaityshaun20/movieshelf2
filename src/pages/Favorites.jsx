import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Your Favorites</h2>
        <p>Movies you’ve saved</p>
      </div>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </main>
  );
}

export default Favorites;
