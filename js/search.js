var searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
var searchText = searchInput.value;

if(searchText.trim().length === 0) {
    return;
}

// 新規画面を表示する処理を実行
    var searchWindow = document.getElementById('searchWindow');
    searchWindow.style.transform = 'translateX(0%)';
        searchInput.value = '';
        console.log(searchText)
  }
});

// 画像表示エリアを非表示にするためのクリックイベントを追加
var arrowButton = document.getElementById('arrow-button');
arrowButton.onclick = function() {
    var searchWindow = document.getElementById('searchWindow');
    searchWindow.style.transform = 'translateX(100%)'; // 画像表示エリアを非表示にする
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
    }
}

// 画像の生成と追加の処理を関数化
function createAndAppendImages(container, numImages) {
    for (var i = 0; i < numImages; i++) {
        var img = new Image();
        img.src = "https://source.unsplash.com/random/?" + keywords + "&" + (images.length + i);
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
var keywords = searchText;

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