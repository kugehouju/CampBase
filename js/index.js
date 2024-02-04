document.addEventListener('DOMContentLoaded', function() {
    const displayedImage = document.getElementById('displayedImage');

    // adjustButtonMargin関数の定義
    function adjustButtonMargin() {
        // displayedImageの高さを取得
        const height = displayedImage.clientHeight;
        // imageBtnの取得
        const imageBtn = document.getElementById('imageBtn');
        // imageBtnのmarginTopを設定
        imageBtn.style.marginTop = `${height + 10}px`;
    }

    // 画像が既にロードされているか、または後でロードされるかを確認
    if (displayedImage.complete && displayedImage.naturalHeight !== 0) {
        // 画像が既にロードされている場合は、直ちにマージンを調整
        adjustButtonMargin();
    } else {
        // 画像がまだロードされていない場合は、ロード後にマージンを調整
        displayedImage.addEventListener('load', adjustButtonMargin);
    }

    // 画像の読み込みエラーの処理を追加
    function addErrorHandling(img) {
        img.onerror = function() {
            this.src = 'fallback_image_url'; // 代替画像のURL
        };
    }

    // 画像をクリックしたときのイベントリスナーを関数にまとめる
    function addClickListener(img) {
        img.onclick = function() {
            var displayedImg = document.getElementById('displayedImage');
            displayedImg.src = this.src;
            var imageDisplayDiv = document.getElementById('imageDisplay');
            imageDisplayDiv.style.transform = 'translateX(0)'; // 画像表示エリアを表示
            document.body.style.overflow = 'hidden'; // 背景のスクロールを無効化
            imageDisplayDiv.style.overflowY = 'scroll'; // #imageDisplayのみスクロールを許可
            imageDisplayDiv.style.height = '100vh'; // 画面の高さに合わせる

            // 画像をクリックするたびに.userIdにランダムな実在する名前を設定
            const userIdElements = document.querySelectorAll('.userId');
            userIdElements.forEach(function(element) {
                element.textContent = generateRandomRealName();
            });
        }
    }

    // 画像表示エリアを非表示にするためのクリックイベントを追加
    var arrowButton = document.getElementById('arrow-button');
    arrowButton.onclick = function() {
        var imageDisplayDiv = document.getElementById('imageDisplay');
        imageDisplayDiv.style.transform = 'translateX(' + window.innerWidth + 'px)'; // 画像表示エリアを非表示にする
        document.body.style.overflow = ''; // 背景のスクロールを再度有効化
        imageDisplayDiv.style.overflowY = 'hidden'; // #imageDisplayのスクロールを無効化
    }

    // 画像の生成と追加の処理を関数化
    function createAndAppendImages(container, numImages) {
        for (var i = 0; i < numImages; i++) {
            var img = new Image();
            img.src = "https://source.unsplash.com/random/?" + keywords[Math.floor(Math.random() * keywords.length)] + "&" + (images.length + i);
            img.loading = 'lazy';
            var div = document.createElement('div');
            div.className = 'grid-item';
            div.appendChild(img);
            images.push(div);
            addClickListener(img);
            addErrorHandling(img);
            container.appendChild(div);
        }
    }

    // 画像を格納する配列
    var images = [];

    // 画像の数を指定
    var numImages = 10;

    // 検索キーワードを格納する配列
    var keywords = ['Camping', 'BBQ', 'Camp fire', 'tent'];

    // Unsplashからランダムな画像を取得し、ページに追加
    var container = document.createElement('div');
    container.className = 'grid-container';
    createAndAppendImages(container, numImages);
    document.body.appendChild(container);

    // スクロールがページの一番下まで到達したときに新しい画像を生成
    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            var newContainer = document.createElement('div');
            newContainer.className = 'grid-container';
            createAndAppendImages(newContainer, numImages);
            document.body.appendChild(newContainer);
        }
    };

    // ランダムな実在する名前を生成する関数
    function generateRandomRealName() {
        const realNames = ["ねこまる", "いぬすけ", "もぐちゃん", "きつねん", "くまごろう", "さるきち", "ぞうたろう", "しかこ", "さめお", "たぬきち", "かめのすけ"];
        const randomIndex = Math.floor(Math.random() * realNames.length);
        return "User: " + realNames[randomIndex];
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // ランダムな場所を生成する関数
    function generateRandomPlace() {
        const places = ["ぽんぽこキャンプ場", "さくらキャンプ村", "やまびこキャンプ場", "ひだまりキャンプリゾート", "みずうみ畔キャンプガーデン", "ひらたにキャンプエリア", "そよかぜ草原キャンプリトリート", "ゆらぎ河岸キャンプランド", "朝日の丘キャンプエリア", "紅葉キャンププレイス"];
        const randomIndex = Math.floor(Math.random() * places.length);
        return places[randomIndex];
    }

    // 画像がクリックされたときにランダムな場所を表示するイベントリスナーを追加
    document.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('click', function() {
            const randomPlace = generateRandomPlace();
            const placeElement = document.querySelector('.place');
            if (placeElement) {
                placeElement.textContent = randomPlace;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        const button = event.target.closest('button');
        if (!button) return;

        if (button.classList.contains('unlike')) {
            // .unlikeから.likeへの変更
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>`;
            button.classList.remove('unlike');
            button.classList.add('like');
        } else if (button.classList.contains('like')) {
            // .likeから.unlikeへの変更
            button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>`;
            button.classList.remove('like');
            button.classList.add('unlike');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') { // クリックされた要素が画像の場合
            const commentNumbers = document.querySelectorAll('.commentNumber');
            commentNumbers.forEach(function(element) {
                // 1から20までのランダムな数字を生成
                const randomNumber = Math.floor(Math.random() * 20) + 1;
                // テキストから「件」を除いた部分を保持し、新しい数字と「件」を追加
                element.textContent = element.textContent.replace(/\d+件?$/, '') + randomNumber + '件';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') { // クリックされた要素が画像の場合
            // ランダムなコメントのサンプル
            const sampleComments = [
                "素晴らしい写真ですね！",
                "この場所に行ってみたい！",
                "素敵な風景！！！",
                "いいね！",
                "感動する、、、",
                "こんな場所あるの！",
                "ここ久しぶりに行きたい",
                "ここまじで最高やった！！",
                "ちるちる",
                "焼きマシュマロいいよね〜",
                "冬の焚き火最高よね！",
                "テント設営うっまwwww",
                "キャンプ行ってみたいなあ",
                "ここめっちゃでかい魚釣れるよ",
                "ご飯おいしそう、、、",
                "ハンモック心地いいよね",
                "お腹空いてきた",
                "肉でっか！！最高やんけ",
                "意外と読書もいいよな",
                "山以外もキャンプできるんや！",
                "めっちゃここ空気良さそう"
            ];

            const commentContent = document.querySelector('#commentContent');
            commentContent.innerHTML = ''; // コメント内容をリセット

            // .commentNumberのテキストから件数を抽出
            const commentNumbers = document.querySelectorAll('.commentNumber');
            if (commentNumbers.length > 0) {
                // 仮に最初の.commentNumberの件数を使用
                const commentsCount = parseInt(commentNumbers[0].textContent.replace(/[^\d]/g, ''), 10);
                const commentsToGenerate = Math.min(commentsCount, sampleComments.length);

                // コメントを生成するための一時的な配列を作成
                let tempComments = [...sampleComments];

                // ランダムなコメントを生成
                for (let i = 0; i < commentsToGenerate; i++) {
                    // 配列からランダムにコメントを選択し、選択されたコメントを配列から削除
                    const randomIndex = Math.floor(Math.random() * tempComments.length);
                    const comment = document.createElement('p');
                    comment.textContent = tempComments[randomIndex];
                    commentContent.appendChild(comment);
                    // 選択されたコメントを配列から削除
                    tempComments.splice(randomIndex, 1);
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') { // クリックされた要素が画像の場合
            // ランダムなユーザー名のサンプル
            const sampleUsernames = [
                "こあくん",
                "おうすけ",
                "ぱんちゃん",
                "らいお",
                "ほっぷ",
                "らくっぺ",
                "くもた",
                "かえの",
                "はりねっぴ",
                "ちーちゃん",
                "かんちゃん",
                "ぺんぴょん",
                "かばっち",
                "やっちゃん",
                "ふくっぴ",
                "はっちゃん",
                "わにっぷ",
                "しまぴー",
                "かっちゃん",
                "はむちゃん"
            ];

            // #commentUser要素を取得
            const commentUserContainer = document.querySelector('#commentUser');
            commentUserContainer.innerHTML = ''; // ユーザー名の内容をリセット

            // .commentNumberのテキストから件数を抽出
            const commentNumbers = document.querySelectorAll('.commentNumber');
            if (commentNumbers.length > 0) {
                // 仮に最初の.commentNumberの件数を使用
                const commentsCount = parseInt(commentNumbers[0].textContent.replace(/[^\d]/g, ''), 10);

                // ユーザー名を生成するための一時的な配列を作成
                let tempUsernames = [...sampleUsernames];

                // ランダムなユーザー名を生成
                for (let i = 0; i < commentsCount; i++) {
                    // 配列からランダムにユーザー名を選択し、選択されたユーザー名を配列から削除
                    const randomUserIndex = Math.floor(Math.random() * tempUsernames.length);
                    const username = tempUsernames[randomUserIndex];
                    tempUsernames.splice(randomUserIndex, 1);

                    // ユーザー名を表示する要素を作成
                    const usernameElement = document.createElement('p');
                    usernameElement.textContent = username;
                    commentUserContainer.appendChild(usernameElement);

                    // 使用済みのユーザー名を配列から削除して重複を避ける
                    if (tempUsernames.length === 0) {
                        tempUsernames = [...sampleUsernames]; // 配列をリセット
                    }
                }
            }
        }
    });
});

