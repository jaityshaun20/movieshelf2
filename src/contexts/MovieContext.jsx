import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem("watchlist");
    return saved ? JSON.parse(saved) : [];
  });

  function addToWatchlist(movie) {
    setWatchlist((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  }

  function removeFromWatchlist(id) {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <MovieContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </MovieContext.Provider>
  );
}
