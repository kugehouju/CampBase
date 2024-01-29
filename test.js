 // フォームの要素を取得
 var form = document.getElementById("form");
 // 入力欄の要素を取得
 var input = document.getElementById("input");
 // 画像を表示する要素を取得
 var image = document.getElementById("image");
 // フォームの送信イベントを検知
 form.addEventListener("submit", function (event) {
   // ページのリロードを防ぐ
   event.preventDefault();
   // 入力されたキーワードを取得
   var keyword = input.value;
   // URLにキーワードを追加
   var url = "https://source.unsplash.com/random/?" + keyword;
   // 画像のsrc属性にURLを設定
   image.src = url;
 });