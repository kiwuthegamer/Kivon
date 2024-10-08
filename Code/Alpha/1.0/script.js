//Global Arrays

var words = [];
var vars = [];
var varv = [];

//Smart Text

function checkt(){
  var input = document.getElementById('input');
  var lines = input.value.split('\n');
  var lin = input.value.substr(0, input.selectionStart).split("\n");
  var line = lin.length - 1;
  var char = input.value.split('').length;
  
}

var rcmode = true;

function rcode(){
  if(rcmode == true){
    checkt();
  }
  setTimeout('rcode()', 500);
}

rcode();

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

var height;
var width;

/*

window.onload = function() {
  height = window.innerHeight;
  width = window.innerWidth;
  if(height < 629 || width < 1366){
    document.getElementById('banner').hidden = false;
    swal("We're Sorry!",'Kivon is not available in this window size!\nTry zooming to 100% or increasing the size of your window', {
      closeOnClickOutside: false,
      closeOnEsc: false,
      buttons: {
        cancel: false,
        confirm: false,
      },
    });
  } else {
    document.getElementById('banner').hidden = true;
  }
};

window.onresize = function() {
  height = window.innerHeight;
  width = window.innerWidth;
  if(height < 629 || width < 1366){
    document.getElementById('banner').hidden = false;
    swal("We're Sorry!",'Kivon is not available in this window size!\nTry zooming to 100% or increasing the size of your window', {
      closeOnClickOutside: false,
      closeOnEsc: false,
      buttons: {
        cancel: false,
        confirm: false,
      },
    });
  } else {
    document.getElementById('banner').hidden = true;
    swal.close();
  }
}

*/

function nt(){
  var txt = document.getElementById('input').value;
  var out = 'https://kiwuthegamer.github.io/Kivon/Code/Alpha/1.0/code.html?code='+converts(txt);
  window.open(out);
}

//Get Started
var disable = 0;

document.addEventListener("click",handler,true);

function handler(e){
  if(disable == 1){
    e.stopPropagation();
    e.preventDefault();
  }
}

//Global Arrays

var words = [];
var vars = [];
var varv = [];

//URL Parameter Function

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
});


//Context Menu

var mouse = false;

function mouseStatus(n) {
  mouse = n;
}

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
// ? compute what is the mouse position relative to the container element (scope)
let {
  left: scopeOffsetX,
  top: scopeOffsetY,
} = scope.getBoundingClientRect();

scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
       
const scopeX = mouseX - scopeOffsetX;
const scopeY = mouseY - scopeOffsetY;

// ? check if the element will go out of bounds
const outOfBoundsOnX =
  scopeX + contextMenu.clientWidth > scope.clientWidth;

const outOfBoundsOnY =
  scopeY + contextMenu.clientHeight > scope.clientHeight;

let normalizedX = mouseX;
let normalizedY = mouseY;

// ? normalize on X
if (outOfBoundsOnX) {
  normalizedX =
  scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
}

// ? normalize on Y
if (outOfBoundsOnY) {
  normalizedY =
    scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
}

return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  setTimeout('checkcm()', 3000)

  const { clientX: mouseX, clientY: mouseY } = event;

  const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

  contextMenu.classList.remove("visible");

  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});

scope.addEventListener("click", (e) => {
  // ? close the menu if the user clicks outside of it
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});

function checkcm(){
  if(mouse){
    setTimeout('checkcm()', 5000)
  } else {
    contextMenu.classList.remove("visible")
  }
}

//Counter
function count(array, value) {
  var count = 0;
  array.forEach((v) => (v === value && count++));
  return count;
}

//Starting
function start(){
  document.getElementById('output').value="Kivon Alpha 1.0";
  document.getElementById('input').value="";
}

//Mobile Check

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  window.open('https://kiwuthegamer.github.io/Kivon/Code/Alpha/1.0/mobile.html', '_self')
} else {
  document.getElementById('banner').hidden=true;
}

//RUnew
if(window.location.href.includes('?code=')){} else {
  swal("Are you new to Kivon?", {
    buttons: ["Nah, I've got this", "Yeah, show me around!"],
  })
  .then((value) => {
    if(`${value}` == 'true'){
      imnew1();
    }
  });
}

//Share Code with Link
function scl(){
  var txt = document.getElementById('input').value;
  var out = 'https://kiwuthegamer.github.io/Kivon/Code/Alpha/1.0/?code='+converts(txt);
  ta = document.createElement("textarea");
  ta.textContent = out;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  swal('Copied Link To Clipboard', '', 'success')
}

//Email Function
function sendEmail(subject, body) {
  Email.send({
    SecureToken: "",
    To: '',
    From: "",
    Subject: subject,
    Body: body,
  })
}

//Report button

function report(){
  var bug = prompt("What does the the bug do?");
  if(bug){
    var rec = prompt("How to recreate it?");
    if(rec){
      sendEmail('Kivon Bug Reported', 'What does the the bug do?<br><br>'+bug+'<br><br><br>How to recreate it?<br><br>'+rec);
      alert('Bug Reported');
    } else {
      alert('Invalid')
      return;
    }
  } else {
    alert('Invalid')
    return;
  }
}

function suggest(){
  var sug = prompt("Explain your suggestion")
  if(sug){
    sendEmail('Kivon Suggestion Sent', sug);
    alert('Suggestion Sent')
  } else {
    alert('Suggestion Cancelled')
  }
}

//Mode Switch

function swtch(){
  document.getElementsByClassName('smb')[0].hidden = false;
}

function cswtch(){
  document.getElementsByClassName('smb')[0].hidden = true;
}

function swtchm(mode){
  var r = document.querySelector(':root');
  if(mode == 0){
    r.style.setProperty('--main-bg-color','#141518');
    r.style.setProperty('--main-button-color','#1e282c');
    r.style.setProperty('--main-text-color','#FFFFFF');
    r.style.setProperty('--main-border-color','#FFFFFF');
    r.style.setProperty('--main-dark-button-color','#181e21');
    r.style.setProperty('--main-border-size','1px');
    r.style.setProperty('--main-text-color2','#FFFFFF');
  }
  if(mode == 1){
    r.style.setProperty('--main-bg-color','#f3f2f2');
    r.style.setProperty('--main-button-color','#fefeff');
    r.style.setProperty('--main-text-color','#000000');
    r.style.setProperty('--main-border-color','#000000');
    r.style.setProperty('--main-dark-button-color','#e0e0e0');
    r.style.setProperty('--main-border-size','1px');
    r.style.setProperty('--main-text-color2','#FFFFFF');
  }
  if(mode == 2){
    r.style.setProperty('--main-bg-color','#FF86C8');
    r.style.setProperty('--main-button-color','#FF99F1');
    r.style.setProperty('--main-text-color','#333333');
    r.style.setProperty('--main-border-color','#FFBF81');
    r.style.setProperty('--main-dark-button-color','#FFBF81');
    r.style.setProperty('--main-border-size','2px');
    r.style.setProperty('--main-text-color2','#FFDC5E');
  }
  if(mode == 3){
    r.style.setProperty('--main-bg-color','#05668D');
    r.style.setProperty('--main-button-color','#028090');
    r.style.setProperty('--main-text-color','#F0F3BD');
    r.style.setProperty('--main-border-color','#02C39A');
    r.style.setProperty('--main-dark-button-color','#00A896');
    r.style.setProperty('--main-border-size','1px');
    r.style.setProperty('--main-text-color2','#00A896');
  }
  if(mode == 4){
    r.style.setProperty('--main-bg-color','#6E44FF');
    r.style.setProperty('--main-button-color','#FFC2E2');
    r.style.setProperty('--main-text-color','#7e38ff');
    r.style.setProperty('--main-border-color','#FF90B3');
    r.style.setProperty('--main-dark-button-color','#FF90B3');
    r.style.setProperty('--main-border-size','1px');
    r.style.setProperty('--main-text-color2','#EF7A85');
  }
  if(mode == 5){
    r.style.setProperty('--main-bg-color','#BBCDE5');
    r.style.setProperty('--main-button-color','#BBCDE5');
    r.style.setProperty('--main-text-color','#000000');
    r.style.setProperty('--main-border-color','#639FAB');
    r.style.setProperty('--main-dark-button-color','#1C5D99');
    r.style.setProperty('--main-border-size','1px');
    r.style.setProperty('--main-text-color2','#FFFFFF');
  }
}

function disize(){
  swal.close();
  document.getElementById('banner').hidden = true;
}

//Tutorial
var currsld = 1;
var slides = 8;

function tutor(){
  document.getElementById('tutor').hidden = false;
}

function tutorc(){
  document.getElementById('tutor').hidden = true;
}

function nxtsld(){
  if(currsld<slides){
    eval('document.getElementById("slide'+currsld+'").hidden=true;');
    currsld = currsld+1;
    eval('document.getElementById("slide'+currsld+'").hidden=false;');
  }
}

function prvsld(){
  if(currsld>1){
    eval('document.getElementById("slide'+currsld+'").hidden=true;');
    currsld = currsld-1;
    eval('document.getElementById("slide'+currsld+'").hidden=false;');
  }
}

function setsld(num){
  if(num<=slides && num>0){
    eval('document.getElementById("slide'+currsld+'").hidden=true;');
    currsld = num;
    eval('document.getElementById("slide'+currsld+'").hidden=false;');
  }
}

function waitin(text, func){
  var input = document.getElementById('input');
  if(input.value == text){
    eval(func);
  } else {
    setTimeout("waitin('"+text+"', '"+func+"')", 1000);
  }
}

function waitout(text, func){
  var out = document.getElementById('output');
  if(out.value == text){
    eval(func);
  } else {
    setTimeout("waitout('"+text+"', '"+func+"')", 1000);
  }
}

function imnew1(){
  disable = 1;
  var gets = document.getElementById('gets');
  gets.hidden = false;
  gets.style['top'] = '60px';
  gets.style['left'] = '5px';
  gets.innerHTML = '⬆ The <b>run</b> button<br>runs your code';
  setTimeout('imnew2()', 5000)
}

function imnew2(){
  var gets = document.getElementById('gets');
  gets.style['top'] = '60px';
  gets.style['left'] = '110px';
  gets.innerHTML = '⬆ The <b>reset</b> button will<br>clear the input and output';
  setTimeout('imnew3()', 5000)
}

function imnew3(){
  var gets = document.getElementById('gets');
  gets.style['top'] = '120px';
  gets.style['left'] = '400px';
  gets.innerHTML = '⬅ This is the <b>input</b> area<br>where you can type in<br>your code';
  setTimeout('imnew4()', 5000)
}

function imnew4(){
  var gets = document.getElementById('gets');
  gets.style['top'] = '120px';
  gets.style['left'] = '800px';
  gets.innerHTML = '➡ This is the <b>output</b><br>area where you<br>will get the<br>output of your<br>code';
  setTimeout('imnew5()', 5000)
}

function imnew5(){
  var gets = document.getElementById('gets');
  gets.style['top'] = '100px';
  gets.style['left'] = '400px';
  gets.innerHTML = '⬅ Try typing a bit of <b>code</b><br>The print function is the most common.<br>Try typing <code>print Hello World!</code>';
  waitin('print Hello World!', 'imnew6()')
}

function imnew6(){
  disable = 0;
  var gets = document.getElementById('gets');
  gets.style['top'] = '60px';
  gets.style['left'] = '5px';
  gets.innerHTML = '⬆ Now click the run<br>button to run your code';
  waitout('Hello World! ', 'imnew7()')
}

function imnew7(){
  var gets = document.getElementById('gets');
  gets.style['top'] = '440px';
  gets.style['left'] = '35px';
  gets.innerHTML = '⬇ Check out the tutorial for more info!';
  tutor();
  setTimeout('imnewe()', 5000)
}

function imnewe(){
  document.getElementById('gets').hidden = true;
}

//Import
function impor(){
  var reader = new FileReader();
  reader.readAsText(document.getElementById('import').files[0]);
  var elem = document.getElementById('input');
  reader.onload = () => elem.value = reader.result;
}

//Export
function expor(){
  var expo = document.getElementById("input").value;
  swal("Program Name:", {
    content: "input",
  })
  .then((value) => {
    if(`${value}`!=null){
      download(`${value}`+'.kivon', expo)
    }
  });
}

//Download Function
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

//quick quiz
function qq(){
  var txt = "alert Quiz!\n\nvar res1 $prompt Question 1: 2+2=?\nvar res2 $prompt Question 2: 5+10=?\nvar res3 $prompt Question 3: 15+20=?\n\nprint Q1 - \nif res1 = 4 then\nprint Correct\nelse\nprint Wrong\nend\n\nprint \\n Q2 - \nif res2 = 15 then\nprint Correct\nelse\nprint Wrong\nend\n\nprint \\n Q3 - \nif res3 = 35 then\nprint Correct\nelse\nprint Wrong\nend\n"
  document.getElementById('input').value=txt;
}

//random quiz
function rq(){
  var txt = "var num1 $rand 1 10\nvar num2 $rand 1 10\n\nvar ans $calc add num1 num2\n\nvar res $prompt What is $num1 + $num2 ?\n\nif ans = res then\nprint Correct!\nelse\nprint Wrong, the answer was $ans\nend";
  document.getElementById('input').value=txt;
}

//guide alerts
function guide(){
  window.open('https://kiwuthegamer.github.io/Kivon/Code/HomePage', "_self")
}
//reset function
function reset(){
  start()
}
//print function
function print(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}

//starter
start();
