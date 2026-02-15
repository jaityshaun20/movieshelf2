import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieGrid from "../components/MovieGrid";

function Watchlist() {
  const { watchlist } = useContext(MovieContext);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>My Watchlist</h2>
        <p>Movies I plan to watch</p>
      </div>

      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet.</p>
      ) : (
        <MovieGrid movies={watchlist} />
      )}
    </main>
  );
}

export default Watchlist;
