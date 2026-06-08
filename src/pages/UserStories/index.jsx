import Navbar from "../../components/Navbar/Navbar";
import "./index.css";

function UserStories() {
  const stories = [
    {
      id: 1,
      title: "Search for TV Shows",
      description:
        "As a user, I want to search for TV shows by name so that I can quickly find information about my favorite shows.",
    },
    {
      id: 2,
      title: "Filter Search Results",
      description:
        "As a user, I want to filter shows by genre, status, and rating so that I can discover shows that match my preferences.",
    },
    {
      id: 3,
      title: "View Detailed Information",
      description:
        "As a user, I want to click on a show card and view detailed information so that I can learn more about the show before deciding to watch it.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="stories-title">User Stories</h1>

        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserStories;