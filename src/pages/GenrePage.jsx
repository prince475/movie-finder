import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import styles from "./GenrePage.module.css";

function GenrePage() {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=d3dca939a936a351b596fc9b7fea821e&with_genres=${genreId}`)
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching movies by genre:", error);
      });
  }, [genreId]);

  return (
    <div className={styles.genrePage}>
      <h1>Movies by Genre</h1>
      <div className={styles.movieGrid}>
        {movies.length > 0 ? (
          movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
}

export default GenrePage;
