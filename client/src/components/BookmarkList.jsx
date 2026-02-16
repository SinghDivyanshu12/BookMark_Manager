import BookmarkItem from "./BookmarkItem";

function BookmarkList({ bookmarks, onTagClick, refresh }) {
  return (
    <div>
      {bookmarks.map(bookmark => (
        <BookmarkItem
          key={bookmark.id}
          bookmark={bookmark}
          onTagClick={onTagClick}
          refresh={refresh}
        />
      ))}
    </div>
  );
}

export default BookmarkList;
