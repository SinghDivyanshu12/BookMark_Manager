import { useState } from "react";
import { createBookmark } from "../services/api";

function BookmarkForm({ onSuccess }) {
  const [form, setForm] = useState({
    url: "",
    title: "",
    description: "",
    tags: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      tags: form.tags
        ? form.tags.split(",").map(t => t.trim().toLowerCase())
        : []
    };

    await createBookmark(payload);
    onSuccess();
    setForm({ url: "", title: "", description: "", tags: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="URL"
        value={form.url}
        onChange={(e) => setForm({ ...form, url: e.target.value })}
        required
      />
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />
      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        placeholder="Tags (comma separated)"
        value={form.tags}
        onChange={(e) => setForm({ ...form, tags: e.target.value })}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default BookmarkForm;
