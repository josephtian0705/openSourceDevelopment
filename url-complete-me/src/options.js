document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);


function saveBookmark(e) {

    var bookmarkName = document.getElementById('bookmarkName').value;
    var bookmarkURL = document.getElementById('bookmarkURL').value;

    if (!validateForm(bookmarkName, bookmarkURL)) {

        return false;
    }

    var bookmark = {
        name: bookmarkName,
        url: bookmarkURL
    }

    if (localStorage.getItem('bookmarks') === null) {

        var bookmarks = [];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {

        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    fetchBookmarks();

    e.preventDefault();

}

