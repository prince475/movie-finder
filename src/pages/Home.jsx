import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home({ searchTerm, genreFilter }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch movies
  async function fetchMovies(url) {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setLoading(false);
  }

  // Fetch movies by genre (this is triggered by the genreFilter)
  useEffect(() => {
    const url = genreFilter
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&with_genres=${genreFilter}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`;

    fetchMovies(url);
  }, [genreFilter]); // Re-fetch when genreFilter changes

  // Fetch movies by search term (this is triggered by the searchTerm)
  useEffect(() => {
    if (searchTerm) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${searchTerm}&page=1`;
      fetchMovies(url);
    } else {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`;
      fetchMovies(url); // Fetch popular movies when no search term is provided
    }
  }, [searchTerm]); // Fetch movies when searchTerm changes

  return (
    <div className={styles.home}>
      <h1>Popular Movies</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div className={styles.movieGrid}>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div className={styles.movieCard} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className={styles.movieImage}
                />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average}</p>
                <p>Release Date: {movie.release_date}</p>
              </div>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
