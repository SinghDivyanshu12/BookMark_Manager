import { useState } from "react";
import { deleteBookmark, updateBookmark } from "../services/api";

function BookmarkItem({ bookmark, onTagClick, refresh }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(bookmark);

  const handleDelete = async () => {
    if (confirm("Are you sure?")) {
      await deleteBookmark(bookmark.id);
      refresh();
    }
  };

  const handleUpdate = async () => {
    await updateBookmark(bookmark.id, form);
    setEditing(false);
    refresh();
  };

  if (editing) {
    return (
      <div>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{bookmark.title}</h3>
      <a href={bookmark.url} target="_blank">{bookmark.url}</a>
      <p>{bookmark.description}</p>
      <div>
        {bookmark.tags.map(tag => (
          <button key={tag} onClick={() => onTagClick(tag)}>
            #{tag}
          </button>
        ))}
      </div>
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default BookmarkItem;
