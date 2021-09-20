function insertElement(tag,text) {
  var el = document.createElement(tag);
  var container = document.getElementsByTagName('body')[0];
  var pasteEl = container.appendChild(el);
  if(pasteEl = true) {
      var txt = document.createTextNode(text);
      el.appendChild(txt);
    } else {
        console.log('error');
    };
};

insertElement('h1','Inserted H1 Text');