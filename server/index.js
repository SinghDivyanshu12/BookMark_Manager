const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const bookmarks = require("./data");
const validateBookmark = require("./validation");

const app = express();
app.use(cors());
app.use(express.json());

/* GET ALL */
app.get("/bookmarks", (req, res) => {
  const { tag } = req.query;

  if (tag) {
    const filtered = bookmarks.filter(b =>
      b.tags.includes(tag.toLowerCase())
    );
    return res.json(filtered);
  }

  res.json(bookmarks);
});

/* CREATE */
app.post("/bookmarks", (req, res) => {
  const error = validateBookmark(req.body);
  if (error) return res.status(400).json({ error });

  const newBookmark = {
    id: uuidv4(),
    ...req.body,
    createdAt: new Date().toISOString()
  };

  bookmarks.push(newBookmark);
  res.status(201).json(newBookmark);
});

/* UPDATE */
app.put("/bookmarks/:id", (req, res) => {
  const index = bookmarks.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  const error = validateBookmark(req.body);
  if (error) return res.status(400).json({ error });

  bookmarks[index] = {
    ...bookmarks[index],
    ...req.body
  };

  res.json(bookmarks[index]);
});

/* DELETE */
app.delete("/bookmarks/:id", (req, res) => {
  const index = bookmarks.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Not found" });

  bookmarks.splice(index, 1);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
