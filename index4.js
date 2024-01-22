    const bookmarkForm = document.getElementById('bookmarkForm');
    const urlInput = document.getElementById('url');
    const bookmarkList = document.getElementById('bookmarkList');

    // Load bookmarks from localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

    function saveBookmarks() {
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    function renderBookmarks() {
        bookmarkList.innerHTML = '';

        bookmarks.forEach((bookmark, index) => {
            const bookmarkElement = document.createElement('div');
            bookmarkElement.classList.add('bookmark');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = bookmark.checked || false;
            checkbox.addEventListener('change', () => {
                bookmarks[index].checked = checkbox.checked;
                saveBookmarks();
                renderBookmarks();
            });

            const urlLabel = document.createElement('label');
            urlLabel.textContent = bookmark.url;

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => {
                const newURL = prompt('Enter a new URL:', bookmark.url);
                if (newURL !== null) {
                    bookmarks[index].url = newURL.trim();
                    saveBookmarks();
                    renderBookmarks();
                }
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                bookmarks.splice(index, 1);
                saveBookmarks();
                renderBookmarks();
            });

            bookmarkElement.appendChild(checkbox);
            bookmarkElement.appendChild(urlLabel);
            bookmarkElement.appendChild(editButton);
            bookmarkElement.appendChild(deleteButton);

            bookmarkList.appendChild(bookmarkElement);
        });
    }

    bookmarkForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newURL = urlInput.value.trim();
        if (newURL === '') return;

        bookmarks.push({ url: newURL });
        saveBookmarks();
        urlInput.value = '';
        renderBookmarks();
    });

    renderBookmarks();
