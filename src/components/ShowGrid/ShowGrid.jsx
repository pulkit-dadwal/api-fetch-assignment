import ShowCard from "../ShowCard/ShowCard";
import "./ShowGrid.css";

function ShowGrid({ shows }) {
  return (
    <div className="show-grid">
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
        />
      ))}
    </div>
  );
}

export default ShowGrid;