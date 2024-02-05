document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.setting').addEventListener('click', function() {
        const editModal = document.getElementById('editModal');
        if (editModal.style.transform === 'translateY(0)') {
            editModal.style.transform = 'translateY(100%)';
        } else {
            editModal.style.transform = 'translateY(3%)';
        }

        document.querySelector('.storageBtn').disabled = true;
        document.querySelector('.storageBtn').style.color = '#818080';
    });

    document.querySelector('.cancelBtn').addEventListener('click', function() {
        const editModal = document.getElementById('editModal');
        editModal.style.transform = 'translateY(100%)';
        document.querySelectorAll('.editInput').forEach(input => input.value = ''); // 文字を消去
    });

    document.querySelector('.storageBtn').addEventListener('click', function() {
        const editModal = document.getElementById('editModal');
        editModal.style.transform = 'translateY(100%)';
        document.querySelectorAll('.editInput').forEach(input => input.value = ''); // 文字を消去
    });

    // ローカルストレージからフラグを取得
    const displayPostImage = localStorage.getItem('displayPostImage');
    if (displayPostImage === 'true') {
        // .postContent imgのスタイルを変更
        const postImages = document.querySelectorAll('.postContent img');
        postImages.forEach(img => {
            img.style.display = 'block';
        });

        // h2要素のスタイルを変更
        const h2Element = document.querySelector('h2');
        if (h2Element) {
            h2Element.style.display = 'none';
        }

        // フラグをクリア
        localStorage.removeItem('displayPostImage');
    }
});