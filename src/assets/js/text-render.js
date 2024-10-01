function textRender() {
    let englishText = document.getElementById('englishText').value;
    let arabicText = document.getElementById('arabicText').value;

    // replace all "\n" with "<br>" even if another word is attached to it
    englishText = englishText.replace(/\\n/g, '<br>');
    arabicText = arabicText.replace(/\\n/g, '<br>');

    // replace <div fontcolor=hexa_color> tages with <span style="color: hexa_color;"> tags with the same hexa color from div tages
    englishText = englishText.replace(/<div fontcolor=([#a-fA-F0-9]+)>/g, '<span style="color: $1;">');
    arabicText = arabicText.replace(/<div fontcolor=([#a-fA-F0-9]+)>/g, '<span style="color: $1;">');

    // replace </div> tages with </span> tages
    englishText = englishText.replace(/<\/div>/g, '</span>');
    arabicText = arabicText.replace(/<\/div>/g, '</span>');

    // replace %s with "placeholder"
    englishText = englishText.replace(/%s/g, 'placeholder');
    arabicText = arabicText.replace(/%s/g, 'مثال');

    console.log(englishText);
    console.log(arabicText);

    // render the text by replacing the text area with div and render the text inside the div
    document.getElementById('englishText').outerHTML = '<div class="form-control" id="englishText" style="white-space: pre-line;">' + englishText + '</div>';
    document.getElementById('arabicText').outerHTML = '<div class="form-control" id="arabicText" style="white-space: pre-line; direction: rtl;">' + arabicText + '</div>';
}