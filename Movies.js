// Movies.js
import "./Movies.css";
import React, { useEffect, useState } from "react";

function MovieList() {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = (page) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=d01c8785bc7cc7f2a90fa2168dd78a85&page=${page}`)
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="main">
      {movieList.map((movie) => (
        <div key={movie.id}>
          <h2 className="Title">{movie.title}</h2>
          {movie.poster_path ? (
            <img
              style={{ width: "300px", height: "350px" }}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <p>No poster available</p>
          )}
        </div>
      ))}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default MovieList;
