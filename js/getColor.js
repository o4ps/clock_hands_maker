function butotnClick() {
  var currentUrl = window.location.href;
  var domain = window.location.origin;
  var firstColor = colorBox1.value.replace("#", "%23");
  var secondColor = colorBox2.value.replace("#", "%23");
  // alert(
  //   "現在の URL: " +
  //     currentUrl +
  //     "\nドメイン: " +
  //     domain +
  //     "現在選択している色は " +
  //     firstColor +
  //     " です"
  // );
  // console.log("現在選択している色は " + colorBox.value + " です");
  location.href =
    domain + "?firstColor=" + firstColor + "&secondColor=" + secondColor;
}

let colorBox1 = document.getElementById("colorBox1");
colorBox1.value = "#F0F0F0";
let colorBox2 = document.getElementById("colorBox2");
colorBox2.value = "#F0F0F0";

let checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", butotnClick);
