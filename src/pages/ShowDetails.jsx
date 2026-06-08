import {
  useParams,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import {
  getShowDetails,
} from "../services/tvmazeApi";

import Navbar from "../components/Navbar/Navbar";

function ShowDetails() {
  const { id } = useParams();

  const [show, setShow] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchShow() {
      try {
        const data =
          await getShowDetails(id);

        setShow(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchShow();
  }, [id]);

  if (loading)
    return <h2>Loading...</h2>;

  return (
    <>
      <Navbar />

      <div className="details-page">

        <img
          src={
            show.image?.original
          }
          alt={show.name}
        />

        <div>
          <h1>{show.name}</h1>

          <p>
            <strong>Rating:</strong>{" "}
            {show.rating.average}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {show.status}
          </p>

          <p>
            <strong>Language:</strong>{" "}
            {show.language}
          </p>

          <p>
            <strong>Runtime:</strong>{" "}
            {show.runtime} mins
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {show.genres.join(", ")}
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html:
                show.summary,
            }}
          />
        </div>

      </div>
    </>
  );
}

export default ShowDetails;