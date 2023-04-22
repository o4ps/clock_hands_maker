function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function hideElementBasedOnUrlParameter(parameter, className) {
  if (getUrlParameter(parameter)) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("hidden");
    }
  }
}

hideElementBasedOnUrlParameter("hide", "hidden-content");
