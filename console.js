var array = document.querySelectorAll('link')

var newarray = []

array.forEach(function(item) {
  var thisItem = item.getAttribute('href')

  if (!newarray.includes(thisItem)) {
    newarray.push(item.getAttribute('href'))
  }
})

var a = document.createElement('a');
var file = new Blob([ newarray.toString() ], { type: 'text/plain' });

a.href = URL.createObjectURL(file);
a.download = 'bla';

open(a.href)
// allow popups