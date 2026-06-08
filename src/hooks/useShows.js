import { useEffect, useState } from "react";
import { getShows, searchShows } from "../services/tvmazeApi";

export default function useShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchShows = async () => {
    try {
      setLoading(true);

      const data = await getShows();

      setShows(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const data = await searchShows(query);

      setShows(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return {
    shows,
    loading,
    error,
    handleSearch,
  };
}