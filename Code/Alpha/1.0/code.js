 //Link Text Converters
function converts(val){
  var out = val;
  var out = out.replaceAll('\n', '@n|');
  var out = out.replaceAll(' ', '@s|');
  var out = out.replaceAll('+', '@p|');
  var out = out.replaceAll('print', '^p|');
  var out = out.replaceAll('prompt', '^pr|');
  var out = out.replaceAll('alert', '^a|');
  var out = out.replaceAll('func', '^fu|');
  var out = out.replaceAll('function', '^f|');
  var out = out.replaceAll('var', '^v|');
  var out = out.replaceAll('if', '^i|');
  var out = out.replaceAll('end', '^e|');
  var out = out.replaceAll('else', '^el|');
  var out = out.replaceAll('arr', '^ar|');
  var out = out.replaceAll('length', '^l|');
  return(out);
}

function convertl(val){
  var out = val;
  var out = out.replaceAll('@n|', '\n');
  var out = out.replaceAll('@s|', ' ');
  var out = out.replaceAll('@p|', '+');
  var out = out.replaceAll('^pr|', 'prompt');
  var out = out.replaceAll('^p|', 'print');
  var out = out.replaceAll('^a|', 'alert');
  var out = out.replaceAll('^fu|', 'func');
  var out = out.replaceAll('^f|', 'function');
  var out = out.replaceAll('^v|', 'var');
  var out = out.replaceAll('^i|', 'if');
  var out = out.replaceAll('^e|', 'end');
  var out = out.replaceAll('^el|', 'else');
  var out = out.replaceAll('^ar|', 'arr');
  var out = out.replaceAll('^l|', 'length');
  return(out);
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(convertl(results[2]));
}

$(document).ready(function() {
  document.getElementById('input').value=getParameterByName('code');
  run();
});

function print(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}