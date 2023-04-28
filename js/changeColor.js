function changeColorParamAndRedirect() {
  const urlObject = new URL(window.location.href);
  urlObject.search = "";
  var currentUrlWithOutParam = urlObject.toString();

  var firstColor = colorBox1.value.replace("#", "%23");
  var secondColor = colorBox2.value.replace("#", "%23");

  // 新しいURL文字列を生成して返す
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
checkButton.addEventListener("click", changeColorParamAndRedirect);
