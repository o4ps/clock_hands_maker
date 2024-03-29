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
  const regex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return regex.test(color);
}

function hasNoColorParameters() {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;

  return (
    searchParams.toString() === "" || searchParams.toString() === "hide=true"
  );
}

function changeCSS() {
  var firstColorParam = getColorByParam("firstColor");
  var secondColorParam = getColorByParam("secondColor");
  var element = document.createElement("style");
  document.head.appendChild(element);
  var sheet = element.sheet;

  if (
    !hasNoColorParameters() &&
    (!isValidColor(firstColorParam) || !isValidColor(secondColorParam))
  ) {
    errMsgBuff = [
      "不正なカラーコードが指定されました\n\n",
      // "色1: " + getColorByParam("firstColor") + "\n",
      // "色2: " + getColorByParam("secondColor") + "\n",
    ];

    if (!isValidColor(firstColorParam)) {
      errMsgBuff.push("色1: " + getColorByParam("firstColor") + "\n");
    }
    if (!isValidColor(secondColorParam)) {
      errMsgBuff.push("色2: " + getColorByParam("secondColor") + "\n");
    }

    errMsg = errMsgBuff.join("");
    window.alert(errMsg);
  }

  if (
    hasNoColorParameters() ||
    !isValidColor(firstColorParam) ||
    !isValidColor(secondColorParam)
  ) {
    firstColorParam = "#ff6161";
    secondColorParam = "#ffbdd1";
  }

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
  let colorBox1 = document.getElementById("colorBox1");
  colorBox1.value = firstColorParam;

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
  let colorBox2 = document.getElementById("colorBox2");
  colorBox2.value = secondColorParam;
}
