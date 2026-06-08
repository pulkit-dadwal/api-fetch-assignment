import { useMemo, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/FilterBar/FilterBar";
import ShowGrid from "../../components/ShowGrid/ShowGrid";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

import useShows from "../../hooks/useShows";

function Home() {
  const {
    shows,
    loading,
    error,
    handleSearch,
  } = useShows();

  const [query, setQuery] =
    useState("");

  const [genre, setGenre] =
    useState("All");

  const [status, setStatus] =
    useState("All");

  const [rating, setRating] =
    useState("0");

  const filteredShows = useMemo(() => {
    return shows.filter((show) => {
      const genreMatch =
        genre === "All" ||
        show.genres.includes(genre);

      const statusMatch =
        status === "All" ||
        show.status === status;

      const ratingMatch =
        (show.rating.average || 0) >=
        Number(rating);

      return (
        genreMatch &&
        statusMatch &&
        ratingMatch
      );
    });
  }, [
    shows,
    genre,
    status,
    rating,
  ]);

  return (
    <>
      <Navbar />

      <div className="container">

        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
        />

        <FilterBar
          genre={genre}
          setGenre={setGenre}
          status={status}
          setStatus={setStatus}
          rating={rating}
          setRating={setRating}
        />

        {loading && <Loading />}

        {error && (
          <Error message={error} />
        )}

        {!loading && !error && (
          <ShowGrid
            shows={filteredShows}
          />
        )}
      </div>
    </>
  );
}

export default Home;