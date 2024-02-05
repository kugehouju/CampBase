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

let uploadedImage = ''; // アップロードされた画像のデータURLを一時保存する変数
let originalImage = ''; // 元の画像のURLを保存する変数

document.querySelector('.setting').addEventListener('click', function() {
    // 編集モーダルを開くたびに元の画像URLを保存
    originalImage = document.querySelector('.userIcon').src;
});

document.querySelector('#imgUp').addEventListener('click', function() {
    // input[type='file'] を動的に作成
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*'; // 画像ファイルのみ選択可能に
    fileInput.style.display = 'none'; // ユーザーには見えないように隠す

    // ファイルが選択されたら
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0]; // 選択されたファイル
        if (file) {
            const reader = new FileReader(); // FileReaderのインスタンスを作成
            reader.onload = function(e) {
                uploadedImage = e.target.result; // 読み込んだファイルの内容を一時保存
                document.querySelector('.editImg').src = uploadedImage; // .editImgに一時的に表示
                // 画像がアップロードされたら .storageBtn を有効化
                document.querySelector('.storageBtn').disabled = false;
                document.querySelector('.storageBtn').style.color = '#333';
            };
            reader.readAsDataURL(file); // ファイルの内容をData URLとして読み込む
        }
    });

    fileInput.click(); // ファイル選択ダイアログを表示
});

document.querySelector('.storageBtn').addEventListener('click', function() {
    if (uploadedImage) {
        document.querySelector('.userIcon').src = uploadedImage; // 保存ボタンが押されたら画像を反映
    }
});

document.querySelector('.cancelBtn').addEventListener('click', function() {
    // キャンセルボタンが押されたら、編集前の画像に戻す
    document.querySelector('.editImg').src = originalImage;
});

document.addEventListener('DOMContentLoaded', function() {
    // セッションストレージからフラグを読み取る
    const nextBtnClicked = sessionStorage.getItem('nextBtnClicked');

    if (nextBtnClicked === 'true') {
        // h2 要素の display: none を設定
        document.querySelectorAll('h2').forEach(h2 => {
            h2.style.display = 'none';
        });

        // .postContent img の display: none を解除
        const postImg = document.querySelector('.postContent img');
        if (postImg) {
            postImg.style.display = 'block'; // または '' に設定してデフォルトの表示スタイルに戻す
        }

        // フラグを読み取った後は、不要になったので削除する
        sessionStorage.removeItem('nextBtnClicked');
    }
});

document.querySelectorAll('#editContent .editInput').forEach(input => {
    input.addEventListener('input', function() {
        // 入力フィールドのクラス名をキーとして、その値をローカルストレージに保存
        localStorage.setItem(input.className, input.value);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 名前、自己紹介、ウェブサイトリンクの各クラスに対応する要素を取得
    const nameElement = document.querySelector('.userName');
    const introElement = document.querySelector('.Introduction');
    const linkElement = document.querySelector('.userUrl a');

    // ローカルストレージから値を取得し、存在する場合はテキストとして設定
    const storedName = localStorage.getItem('editInput Name');
    const storedIntro = localStorage.getItem('editInput Intro');
    const storedLink = localStorage.getItem('editInput Link');

    if (storedName) nameElement.textContent = storedName;
    if (storedIntro) introElement.textContent = storedIntro;
    if (storedLink) linkElement.href = storedLink; // リンクの場合はhref属性を更新
    if (storedLink) linkElement.textContent = storedLink; // リンクテキストも更新
});