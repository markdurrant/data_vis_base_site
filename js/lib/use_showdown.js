// Any <div> with a class of "markdown" will parse text inside into markdown. 
$("div.markdown").each(function () {
  var markdownInput = $(this).text();  
  var markdownOutput = new Showdown.converter().makeHtml(markdownInput);
  $(this).replaceWith(markdownOutput);
});