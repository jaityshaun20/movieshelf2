import { useEffect, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  // Favorites (localStorage)
  const [isFavorite, setIsFavorite] = useState(false);

  // Watchlist (Context)
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    useContext(MovieContext);

  const inWatchlist = watchlist.some((m) => m.id === movie.id);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some((fav) => fav.id === movie.id);
    setIsFavorite(exists);
  }, [movie.id]);

  function toggleFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updated = favorites.filter((fav) => fav.id !== movie.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  }

  function toggleWatchlist() {
    if (inWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://placehold.co/300x450/667eea/ffffff?text=No+Poster"
          }
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">
            {movie.release_date?.substring(0, 4)}
          </span>
        </div>

        <button className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? "❤️ Remove Favorite" : "♡ Add to Favorites"}
        </button>

        <button className="watchlist-button" onClick={toggleWatchlist}>
          {inWatchlist ? "➖ Remove from Watchlist" : "➕ Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
