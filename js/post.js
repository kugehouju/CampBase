document.addEventListener('DOMContentLoaded', function() {
    // 最初は.nextBtnを無効にする
    const nextBtn = document.querySelector('.nextBtn');
    nextBtn.disabled = true;

    document.getElementById('postImgBox').addEventListener('click', function() {
        let fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // 既存のコンテンツ（SVGと<p>タグ）を消去
                const postImgDiv = document.getElementById('postImg');
                postImgDiv.innerHTML = ''; // postImgDivの中身を空にする

                // 選択した画像のプレビュー表示
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.width = '100%'; // postImgBoxに合わせてサイズ調整
                    img.style.height = 'auto'; // アスペクト比を保持
                    img.style.objectFit = 'cover'; // 画像がboxにぴったり収まるように
                    postImgDiv.appendChild(img); // 画像をpostImgDivに追加
                };
                reader.readAsDataURL(file);

                // 画像がアップロードされたら.nextBtnを有効にする
                nextBtn.disabled = false;
                nextBtn.style.color = '#333;'
            }
        });

        fileInput.click();
    });
});