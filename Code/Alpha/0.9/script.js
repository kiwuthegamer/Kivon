var name = sessionStorage.getItem("username");

//Msg Arrays
var users = [];
var titles = [];
var msgs = [];

if(name){
  if(users.indexOf(name)!=-1){
    document.getElementById('message').value="✉"+count(users, name);
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
  document.getElementById('output').value="Kivon Alpha 0.9";
  document.getElementById('input').value="";
}

//Acounts
function signin(){
  var name = prompt("What's your username?");
  if(name){
    sessionStorage.setItem("username", name);
    alert('Successfully Signed In')
    document.getElementById('signin').hidden=true
    document.getElementById('logout').hidden=false
    if(name){
      if(users.indexOf(name)!=-1){
        document.getElementById('message').value="✉"+count(users, name);
      }
    }
  } else {alert('Invalid Username');signin();}
}

function logout(){
  if(confirm('Are You Sure?')){
    sessionStorage.removeItem('username');
    alert('Logged Out')
    document.getElementById('message').value="✉"
    document.getElementById('signin').hidden=false
    document.getElementById('logout').hidden=true
  } else {
    alert('Log out Cancelled')
  }
}

//Mobile Check

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  window.open(window.location.href.substr(0,44)+'/mobile.html', '_self')
} else {
  document.getElementById('banner').hidden=true;
}

//Msg button
function msg(){
  var name = sessionStorage.getItem("username");
  if(name){} else {signin(); return;}
  if(users.indexOf(name)==-1){
    alert("You don't have any messages");
  } else {
    alert("You have "+count(users, name)+" message(s)");
    var tites = [];
    var txts = [];
    var vcount = -1;
    for(var i=0; i<count(users, name); i++){
      var vcount = users.indexOf(name, vcount+1);
      tites.push(titles[vcount]);
      txts.push(msgs[vcount]);
    }
    var num = prompt("Which message do you want to view?(Num)\n"+tites.join(', '))
    if(num){
      sendEmail(name+' Saw Your Message', name+' Saw the message you sent titled '+tites[num-1]);
      alert(tites[num-1] +'\n'+ txts[num-1]);
    }
  }
}

//Share Code with Link
function scl(){
  var txt = document.getElementById('input').value;
  if(document.location.href.includes('?code=')){
    var out = document.location.href.substr(0, 44)+"?code="+txt.replace(/\n/g,'\\n').replace(/ /,'%20')
  } else {
    var out = document.location.href+"?code="+txt.replace(/\n/g,'\\n').replace(/ /,'%20')
  }
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
  if(sessionStorage.getItem("username")){} else {signin();}
  var bug = prompt("What does the the bug do?");
  var rec = prompt("How to recreate it?");
  sendEmail('Kivon Bug Reported', 'Username: '+name+'<br><br><br>What does the the bug do?<br><br>'+bug+'<br><br><br>How to recreate it?<br><br>'+rec);
}

function suggest(){
  if(sessionStorage.getItem("username")){
    var name = sessionStorage.getItem("username")
    var sug = prompt("Explain your suggestion")
    sendEmail('Kivon Suggestion Sent', sug+'<br><br><br>From: '+name);
  } else {signin();}
}

//Mode Switch
var dark = 1;

function swtch(){
  var r = document.querySelector(':root');
  if(dark==1){
    r.style.setProperty('--main-bg-color','#f3f2f2');
    r.style.setProperty('--main-button-color','#fefeff');
    r.style.setProperty('--main-text-color','#000000');
    r.style.setProperty('--main-border-color','#000000');
    r.style.setProperty('--main-dark-button-color','#e0e0e0');
    dark=0;
  } else {
    r.style.setProperty('--main-bg-color','#141518');
    r.style.setProperty('--main-button-color','#1e282c');
    r.style.setProperty('--main-text-color','#FFFFFF');
    r.style.setProperty('--main-border-color','#FFFFFF');
    r.style.setProperty('--main-dark-button-color','#181e21');
    dark=1;
  }
}

//Tutorial
var currsld = 1;
var slides = 8;

function tutor(){
  document.getElementById('tutor').hidden=false;
}

function tutorc(){
  document.getElementById('tutor').hidden=true;
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

//Import
function impor(){
  var reader = new FileReader();
  reader.readAsText(document.querySelector('input[type="file"]').files[0]);
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
  window.open('https://kivon-home-page.kevingeorge.repl.co', "_self")
}
//reset function
function reset(){
  start()
}
//print function
function prent(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}

//starter
start();

//ctrl+enter run
let keysPressed = {};

document.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    delete this.keysPressed[event.key];
 });

document.addEventListener('keydown', (event) => {
   keysPressed[event.key] = true;

   if (keysPressed['Control'] && event.key == 'Enter') {
       run();
   }
});

document.addEventListener('keyup', (event) => {
   delete keysPressed[event.key];
});