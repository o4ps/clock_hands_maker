function getColorByParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function isValidColor(color) {
  if (!color || color.length === 0) {
    return false;
  }

  var colorTestElement = document.createElement("div");
  colorTestElement.style.color = color;
  return colorTestElement.style.color.length > 0;
}

function changeCSS() {
  var firstColorParam = getColorByParam("firstColor");
  var secondColorParam = getColorByParam("secondColor");
  var element = document.createElement("style");
  document.head.appendChild(element);
  var sheet = element.sheet;

  if (isValidColor(firstColorParam)) {
    sheet.insertRule(
      ".clock .circle#sc i { background: " + firstColorParam + "; }",
      0
    );
    sheet.insertRule(
      ".clock .circle#sc i { box-shadow: 0 70px 0 " + firstColorParam + "; }",
      0
    );
    sheet.insertRule(
      ".clock::before { box-shadow: 0 0 0 4px " +
        firstColorParam +
        ", 0 0 0 6px " +
        firstColorParam +
        "; }",
      0
    );
  }

  if (isValidColor(secondColorParam)) {
    sheet.insertRule(
      ".clock .circle#hr i { box-shadow: 0 70px 0 " + secondColorParam + "; }",
      0
    );
    sheet.insertRule(
      ".clock .circle#mn i { box-shadow: 0 70px 0 " + secondColorParam + "; }",
      0
    );
    sheet.insertRule(
      ".clock .circle i { background:" + secondColorParam + "; }",
      0
    );
    sheet.insertRule(
      ".clock::before { background:" + secondColorParam + "; }",
      0
    );
  }

  let colorBox1 = document.getElementById("colorBox1");
  colorBox1.value = firstColorParam;
  let colorBox2 = document.getElementById("colorBox2");
  colorBox2.value = secondColorParam;
}
