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

function fetchBookmarks() {

    //Get bookmarks from LocalStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var displayBookmark = document.getElementById('displayBookmark');

    displayBookmark.innerHTML = '';

    for (var i = 0; i < bookmarks.length; i++) {

        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        displayBookmark.innerHTML += '<h3>' + name + '</h3>' +
            '<a href="' + url + '">' + '<button>Visit</button>' + '</a>' +
            '<a href="#" onclick="deleteBookmark(\'' + url + '\')"><button>Delete</button></a>';

    }

}
