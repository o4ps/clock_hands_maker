function changeColor() {
  var firstColor = colorBox1.value.replace("#", "%23");
  var secondColor = colorBox2.value.replace("#", "%23");

  // URLオブジェクトを作成
  const urlObject = new URL(window.location.href);
  // URLのsearchプロパティを空文字列に設定して、パラメータを削除
  urlObject.search = "";
  // 新しいURL文字列を生成して返す
  var currentUrlWithOutParam = urlObject.toString();

  location.href =
    currentUrlWithOutParam +
    "?firstColor=" +
    firstColor +
    "&secondColor=" +
    secondColor;
}

let colorBox1 = document.getElementById("colorBox1");
let colorBox2 = document.getElementById("colorBox2");

let checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", changeColor);
