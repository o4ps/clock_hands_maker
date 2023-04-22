const copyButton = document.getElementById("copyButton");
const sourceUrl = document.getElementById("sourceUrl");

// クリップボードへコピー（ボタンをクリックした時）
copyButton.addEventListener("click", () => {
  const value = sourceUrl.value;
  copyToClipboard(value);
});

// クリップボードへコピー（コピーの処理）
function copyToClipboard(tagValue) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(tagValue).then(function () {});
  } else {
    sourceUrl.select();
    document.execCommand("copy");
    messageActive();
  }
}
