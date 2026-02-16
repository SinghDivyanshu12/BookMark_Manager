const BASE_URL = "http://localhost:5000";

export const fetchBookmarks = async (tag) => {
  const url = tag
    ? `${BASE_URL}/bookmarks?tag=${tag}`
    : `${BASE_URL}/bookmarks`;
  const res = await fetch(url);
  return res.json();
};

export const createBookmark = async (data) => {
  const res = await fetch(`${BASE_URL}/bookmarks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateBookmark = async (id, data) => {
  const res = await fetch(`${BASE_URL}/bookmarks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteBookmark = async (id) => {
  await fetch(`${BASE_URL}/bookmarks/${id}`, {
    method: "DELETE"
  });
};
