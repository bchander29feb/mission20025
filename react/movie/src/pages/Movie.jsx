import { useState, useEffect } from "react";
// import Card from "../components/Card";
import Card from '../coponents/Card'

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async (pageNumber) => {
    setLoading(true);
    const res = await fetch(
      `http://www.omdbapi.com/?s=avengers&apikey=63497031&page=${pageNumber}`
    );
    const data = await res.json();

    if (data.Search) {
      setMovies((prev) => [...prev, ...data.Search]); // append movies
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>

      <div className="btn-container">
        <button onClick={() => setPage((prev) => prev + 1)} disabled={loading}>
          {loading ? "Loading..." : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Movie;
