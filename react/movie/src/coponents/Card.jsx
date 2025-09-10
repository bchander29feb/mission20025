import { useState } from "react";

const Card = ({ movie }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=63497031`);
    const data = await res.json();
    setDetails(data);
    setLoading(false);
  };

  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} />
      <div className="card-body">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        {!details && (
          <button onClick={fetchDetails} disabled={loading}>
            {loading ? "Loading..." : "View More"}
          </button>
        )}
        {details && (
          <div className="details">
            <p><strong>Genre:</strong> {details.Genre}</p>
            <p><strong>Director:</strong> {details.Director}</p>
            <p><strong>Actors:</strong> {details.Actors}</p>
            <p><strong>Plot:</strong> {details.Plot}</p>
            <p><strong>IMDB Rating:</strong> {details.imdbRating}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
