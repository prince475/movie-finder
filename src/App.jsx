import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GenrePage from "./pages/GenrePage";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genreFilter, setGenreFilter] = useState("");

  // Fetch genres from TMDB API
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.error("Error fetching genres", error);
      });
  }, []);

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle genre change
  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  return (
    <div>
      <Navbar
        genres={genres}
        onSearchChange={handleSearchChange}
        onGenreChange={handleGenreChange}
      />
      <Routes>
        <Route
          path="/"
          element={<Home searchTerm={searchTerm} genreFilter={genreFilter} />}
        />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/about" element={<About />} />
        <Route path="/genre/:genreId" element={<GenrePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
