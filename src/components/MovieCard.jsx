import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard({ title, pic, rating, genre }) {
  return (
    <div className={styles.movieCard}>
      <img src={`https://image.tmdb.org/t/p/w500/${pic}`} alt={title} className={styles.movieImage} />
      <div className={styles.movieDetails}>
        <h3>{title}</h3>
        <p>Rating: {rating}</p>
        <p>Genre: {genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;
