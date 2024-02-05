document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.querySelector('.nextBtn');
    nextBtn.disabled = true; // 初期状態で無効

    document.getElementById('postImgBox').addEventListener('click', function() {
        let fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const postImgDiv = document.getElementById('postImg');
                postImgDiv.innerHTML = ''; // 既存の内容をクリア

                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.objectFit = 'cover';
                    postImgDiv.appendChild(img);

                    nextBtn.disabled = false; // 画像アップロード後にボタンを有効化
                    nextBtn.style.color = '#333'; // ボタンの色を変更
                };
                reader.readAsDataURL(file);
            }
        });

        fileInput.click();
    });

    nextBtn.addEventListener('click', function() {
        // セッションストレージにフラグを設定
        sessionStorage.setItem('nextBtnClicked', 'true');
    
        // profile.htmlに遷移
        window.location.href = 'profile.html';
    });
});