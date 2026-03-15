import { useState, useEffect } from "react";

import Rating from "./Rating";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useKey } from "../hooks/useKey";

const key = process.env.REACT_APP_OMDB_KEY;

export default function MovieDetails({
  selectedMovie,
  onRemoveMovie,
  onAddWatched,
  watched,
}) {
  const [movieData, setMovieData] = useState({});
  const [userRating, setUserRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isWatched = watched
    .map((movie) => movie.imdbID)
    .includes(selectedMovie);

  const starRating = watched.find(
    (movie) => movie.imdbID === selectedMovie,
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movieData;

  function handleAdd() {
    const movietoAdd = {
      imdbID: selectedMovie,
      title,
      year,
      poster,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
      userRating,
    };

    onAddWatched(movietoAdd);
    onRemoveMovie();
  }

  useEffect(
    function () {
      setIsLoading(true);
      setError("");

      async function getMovieDetails() {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${key}&i=${selectedMovie}`,
          );

          if (!res.ok) {
            throw new Error("Failed to Fetch the Movie Details");
          }

          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("No Results Found");
          }

          setMovieData(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectedMovie],
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [title],
  );

  useKey("Escape", onRemoveMovie);

  return (
    <div className="details">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          <header>
            <button className="btn-back" onClick={onRemoveMovie}>
              &larr;
            </button>

            <img src={poster} alt={`Poster of ${title} Movie`} />

            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <Rating
                    key={selectedMovie}
                    maxRating={10}
                    size={24}
                    onChangeRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated the movie {starRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
