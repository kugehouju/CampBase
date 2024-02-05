document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButtons = document.querySelectorAll('#searchBox button');
    const searchWindow = document.getElementById('searchWindow');
    const searchBack = document.getElementById('searchBack'); // searchBack要素を取得
    const leftArrow = document.getElementById('leftarrow');

    // searchBackの背景画像を更新
    const newImageUrl = 'https://source.unsplash.com/random/?camp&';
    searchBack.style.backgroundImage = 'url("' + newImageUrl + '")';

    function addRandomImages(query = '') {
        // 既存の画像コンテナをクリア
        const existingImagesContainer = document.getElementById('images-container');
        if (existingImagesContainer) {
            searchWindow.removeChild(existingImagesContainer);
        }

        const imagesContainer = document.createElement('div');
        imagesContainer.className = 'images-container';
        imagesContainer.id = 'images-container';

        for (let i = 0; i < 20; i++) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            const img = document.createElement('img');
            img.className = 'random-image';
            img.src = `https://source.unsplash.com/random/1000x1000?${query}&sig=${Math.random()}`;
            imageContainer.appendChild(img);
            imagesContainer.appendChild(imageContainer);
        }

        // #leftarrowの下にimagesContainerを挿入
        leftArrow.after(imagesContainer);
    }

    function addMoreRandomImages(query = '') {
        const imagesContainer = document.getElementById('images-container');
        for (let i = 0; i < 10; i++) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';
            const img = document.createElement('img');
            img.className = 'random-image';
            img.src = `https://source.unsplash.com/random/1000x1000?${query}&sig=${Math.random()}`;
            imageContainer.appendChild(img);
            imagesContainer.appendChild(imageContainer);
        }
    }

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && searchInput.value.trim() !== '') {
            e.preventDefault();
            searchWindow.style.transform = 'translateX(0)';
            addRandomImages(searchInput.value.trim());
            searchInput.value = '';
        }
    });

    searchButtons.forEach(button => {
        button.addEventListener('click', function() {
            searchWindow.style.transform = 'translateX(0)';
            const buttonClass = this.getAttribute('class').split(' ')[0];
            addRandomImages(buttonClass);
        });
    });

    leftArrow.addEventListener('click', function() {
        searchWindow.style.transform = 'translateX(100%)';
    });
});