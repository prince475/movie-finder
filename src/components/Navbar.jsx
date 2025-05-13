import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ genres, onSearchChange, onGenreChange }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoAndLinks}>
        <div className={styles.logo}>
        <Link to="/" className={styles.navLink}>
          Movie Finder
        </Link>
        </div>
        <div className={styles.navLinks}>
          <Link to="/about" className={styles.navLink}>About</Link>
          <Link to="/post/22" className={styles.navLink}>Post</Link>
        </div>
      </div>
      <div className={styles.rightAlign}>
        <input
          type="text"
          placeholder="Search movies..."
          onChange={onSearchChange}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.genres}>
        <select onChange={onGenreChange} className={styles.genreSelect}>
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Navbar;






// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";

// function Navbar({ genres, onSearchChange, onGenreChange }) {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link to="/" className={styles.navLink}>
//           Movie Finder
//         </Link>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search movies..."
//           onChange={onSearchChange}
//           className={styles.searchInput}
//         />
//       </div>
//       <div className={styles.genres}>
//         <select onChange={onGenreChange} className={styles.genreSelect}>
//           <option value="">All Genres</option>
//           {genres.map((genre) => (
//             <option key={genre.id} value={genre.id}>
//               {genre.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;