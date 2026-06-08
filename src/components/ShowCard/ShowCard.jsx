import "./ShowCard.css";
import { Link } from "react-router-dom";

function ShowCard({ show }) {
  return (
    <Link
      to={`/show/${show.id}`}
      className="card-link"
    >
      <div className="show-card">

        <img
          src={
            show.image?.medium ||
            "https://via.placeholder.com/210x295"
          }
          alt={show.name}
        />

        <div className="card-content">
          <h3>{show.name}</h3>

          <p>
            ⭐ {show.rating?.average || "N/A"}
          </p>

          <p>
            {show.genres?.join(", ")}
          </p>
        </div>

      </div>
    </Link>
  );
}

export default ShowCard;