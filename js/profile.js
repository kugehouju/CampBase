document.querySelector('.setting').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    if (editModal.style.transform === 'translateY(0)') {
        editModal.style.transform = 'translateY(100%)';
    } else {
        editModal.style.transform = 'translateY(3%)';
    }

    document.querySelector('.storageBtn').disabled = true;
    document.querySelector('.storageBtn').style.color = '#818080';

    // p 要素のテキストを input の placeholder に設定
    const userNameP = document.querySelector('.userName').textContent;
    const introductionP = document.querySelector('.Introduction').textContent;
    const userUrlA = document.querySelector('.userUrl a').textContent;

    document.querySelector('.Name').placeholder = userNameP;
    document.querySelector('.Intro').placeholder = introductionP;
    document.querySelector('.Link').placeholder = userUrlA;
});

document.querySelector('.cancelBtn').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    editModal.style.transform = 'translateY(100%)';
    document.querySelectorAll('.editInput').forEach(input => input.value = ''); // 文字を消去
});

document.querySelector('.storageBtn').addEventListener('click', function() {
    const editModal = document.getElementById('editModal');
    // 各 .editInput の中の文字を取得
    const nameInput = document.querySelector('.Name');
    const introInput = document.querySelector('.Intro');
    const linkInput = document.querySelector('.Link');

    // 対応する p 要素
    const userNameP = document.querySelector('.userName');
    const introductionP = document.querySelector('.Introduction');
    const userUrlA = document.querySelector('.userUrl a');

    // 変更があった場合のみ p 要素のテキストを更新
    if (nameInput.value.trim() !== '') userNameP.textContent = nameInput.value;
    if (introInput.value.trim() !== '') introductionP.textContent = introInput.value;
    if (linkInput.value.trim() !== '') {
        userUrlA.textContent = linkInput.value;
        userUrlA.href = linkInput.value;
    }

    // 編集画面を閉じる
    editModal.style.transform = 'translateY(100%)';
    // 入力欄の文字を消去
    document.querySelectorAll('.editInput').forEach(input => input.value = '');
});

const editInputs = document.querySelectorAll('.editInput');

document.addEventListener('DOMContentLoaded', function() {
    const storageBtn = document.querySelector('.storageBtn');
    storageBtn.disabled = true; // 初期状態で .storageBtn を無効化

    editInputs.forEach(input => input.addEventListener('input', function() {
        let isAnyInputFilled = Array.from(editInputs).some(input => input.value.trim() !== '');
        storageBtn.disabled = !isAnyInputFilled;
        storageBtn.style.color = isAnyInputFilled ? '#333' : '#818080';
    }));
});