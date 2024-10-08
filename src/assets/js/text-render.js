let unrenderEnglishText ="";
let unrenderArabicText ="";

function textRender() {
    let englishText = unrenderEnglishText;
    let arabicText = unrenderArabicText;

    // replace all "\n" with "<br>" even if another word is attached to it
    englishText = englishText.replace(/\\n/g, '<br>');
    arabicText = arabicText.replace(/\\n/g, '<br>');

    // replace <div fontcolor=hexa_color> tages with <span style="color: hexa_color;"> tags with the same hexa color from div tages and add "#" if not exist
    englishText = englishText.replace(/<div fontcolor=([0-9A-Fa-f]{6})>/g, '<span style="color: #$1;">');
    arabicText = arabicText.replace(/<div fontcolor=([0-9A-Fa-f]{6})>/g, '<span style="color: #$1;">');

    // replace </div> tages with </span> tages
    englishText = englishText.replace(/<\/div>/g, '</span>');
    arabicText = arabicText.replace(/<\/div>/g, '</span>');

    // replace %s with "placeholder"
    englishText = englishText.replace(/%s/g, 'placeholder');
    arabicText = arabicText.replace(/%s/g, 'مثال');

    // render the text by replacing the text area with div and render the text inside the div
    document.getElementById('englishText').outerHTML = '<div class="form-control" id="englishText" style="white-space: pre-line;">' + englishText + '</div>';
    document.getElementById("arabicText").outerHTML =
      '<div class="form-control" id="arabicText" style="white-space: pre-line; direction: rtl;">' +
      arabicText +
      "</div>";
}

// event listner for div with id "englishText" or "arabicText" to replace the div with text area again using unrender text
document.addEventListener("click", function (e) {
  if (e.target.id === "englishText" && e.target.tagName === "DIV") {
    document.getElementById("englishText").outerHTML =
      '<textarea class="form-control" id="englishText" rows="10">' +
      unrenderEnglishText +
      "</textarea>";
  } else if (e.target.id === "arabicText" && e.target.tagName === "DIV") {
    document.getElementById("arabicText").outerHTML =
      '<textarea class="form-control" id="arabicText" rows="10">' +
      unrenderArabicText +
      "</textarea>";
  }
});

// event listner for text area with id "englishText" or "arabicText" to save the text value in unrender text and render the text
document.addEventListener("input", function (e) {
  if (e.target.id === "englishText" && e.target.tagName === "TEXTAREA") {
    unrenderEnglishText = e.target.value;
  } else if (e.target.id === "arabicText" && e.target.tagName === "TEXTAREA") {
    unrenderArabicText = e.target.value;
  }
});