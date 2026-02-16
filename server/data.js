const { v4: uuidv4 } = require("uuid");

const bookmarks = [
  {
    id: uuidv4(),
    url: "https://google.com",
    title: "Google",
    description: "Search engine",
    tags: ["search"],
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    url: "https://github.com",
    title: "GitHub",
    description: "Code hosting platform",
    tags: ["code"],
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    url: "https://stackoverflow.com",
    title: "StackOverflow",
    description: "Developer Q&A",
    tags: ["programming"],
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    url: "https://youtube.com",
    title: "YouTube",
    description: "Video platform",
    tags: ["video"],
    createdAt: new Date().toISOString()
  },
  {
    id: uuidv4(),
    url: "https://developer.mozilla.org",
    title: "MDN",
    description: "Web documentation",
    tags: ["docs"],
    createdAt: new Date().toISOString()
  }
];

module.exports = bookmarks;
