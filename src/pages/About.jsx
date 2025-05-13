import React from "react";
import styles from "./About.module.css"; // New CSS Module for About Page

function About() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutCard}>
        <h1>About Movie Finder</h1>
        <p>
          Movie Finder is your go-to app for discovering popular movies, searching by genre, and exploring the world of cinema!
          Whether you're looking for the latest blockbuster or exploring hidden gems, our app makes movie exploration easy.
        </p>
        <p>
          We use The Movie Database (TMDb) API to bring you the most up-to-date movie information and recommendations.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://example.com/movie-theater-image.jpg" // Placeholder image, replace with a relevant image
          alt="Movie Theater"
          className={styles.aboutImage}
        />
      </div>
    </div>
  );
}

export default About;
