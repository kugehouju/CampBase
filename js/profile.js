document.querySelector('.setting').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    if (editModal.style.transform === 'translateY(0)') {
        editModal.style.transform = 'translateY(100%)';
    } else {
        editModal.style.transform = 'translateY(3%)';
    }
});

document.querySelector('.cancelBtn').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    editModal.style.transform = 'translateY(100%)';
    document.querySelectorAll('.editInput').forEach(input => input.value = ''); // 文字を消去
});

document.querySelector('.storageBtn').addEventListener('click', function() {
    editModal.style.transform = 'translateY(100%)';
    document.querySelectorAll('.editInput').forEach(input => input.value = ''); // 文字を消去
});

const editInputs = document.querySelectorAll('.editInput');

document.addEventListener('DOMContentLoaded', function() {
    const storageBtn = document.querySelector('.storageBtn');
    storageBtn.disabled = true; // 初期状態で .storageBtn を無効化

    document.querySelector('.editInput').addEventListener('input', function() {
        if (this.value.trim() !== '') {
            storageBtn.disabled = false; // 文字が入力されていれば .storageBtn を有効化
            storageBtn.style.color = '#333';
        } else {
            storageBtn.disabled = true; // 文字がなければ .storageBtn を無効化
            storageBtn.style.color = '#818080';
        }
    });
});
