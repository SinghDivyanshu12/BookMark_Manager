import { useEffect, useState } from "react";
import { fetchBookmarks } from "./services/api";
import BookmarkList from "./components/BookmarkList";
import BookmarkForm from "./components/BookmarkForm";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchBookmarks();
        setBookmarks(data);
      } catch (e) {
        console.error(e);
        setError("Failed to load bookmarks");
      }
    }

    getData();
  }, []);

  const loadBookmarks = async (tag) => {
    try {
      const data = await fetchBookmarks(tag);
      setBookmarks(data);
      setError("");
    } catch (e) {
      console.error(e);
      setError("Failed to load bookmarks");
    }
  };

  const filtered = bookmarks.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.url.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Bookmark Manager</h1>

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {activeTag && (
        <div>
          Active Tag: {activeTag}
          <button
            onClick={() => {
              setActiveTag(null);
              loadBookmarks();
            }}
          >
            Clear
          </button>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <BookmarkForm onSuccess={() => loadBookmarks(activeTag)} />

      <BookmarkList
        bookmarks={filtered}
        onTagClick={(tag) => {
          setActiveTag(tag);
          loadBookmarks(tag);
        }}
        refresh={() => loadBookmarks(activeTag)}
      />
    </div>
  );
}
