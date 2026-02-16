function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function validateBookmark(data) {
  const { url, title, description, tags } = data;

  if (!url || !title) {
    return "URL and title are required.";
  }

  if (!isValidURL(url)) {
    return "Invalid URL format.";
  }

  if (title.length > 200) {
    return "Title exceeds 200 characters.";
  }

  if (description && description.length > 500) {
    return "Description exceeds 500 characters.";
  }

  if (tags) {
    if (!Array.isArray(tags)) {
      return "Tags must be an array.";
    }
    if (tags.length > 5) {
      return "Maximum 5 tags allowed.";
    }
    if (!tags.every(tag => tag === tag.toLowerCase())) {
      return "Tags must be lowercase.";
    }
  }

  return null;
}

module.exports = validateBookmark;
