import "./FilterBar.css";

function FilterBar({
  genre,
  setGenre,
  status,
  setStatus,
  rating,
  setRating,
}) {
  return (
    <div className="filter-bar">

      <select
        value={genre}
        onChange={(e) =>
          setGenre(e.target.value)
        }
      >
        <option value="All">
          All Genres
        </option>

        <option value="Drama">
          Drama
        </option>

        <option value="Comedy">
          Comedy
        </option>

        <option value="Action">
          Action
        </option>

        <option value="Crime">
          Crime
        </option>

        <option value="Thriller">
          Thriller
        </option>
      </select>

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option value="All">
          All Status
        </option>

        <option value="Running">
          Running
        </option>

        <option value="Ended">
          Ended
        </option>
      </select>

      <select
        value={rating}
        onChange={(e) =>
          setRating(e.target.value)
        }
      >
        <option value="0">
          Any Rating
        </option>

        <option value="5">
          5+
        </option>

        <option value="7">
          7+
        </option>

        <option value="8">
          8+
        </option>
      </select>
    </div>
  );
}

export default FilterBar;