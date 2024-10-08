var dark = 1

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
  closem();
}

sessionStorage.setItem('menu', 0);

function menut(){
  var menu = sessionStorage.getItem('menu');
  if(menu == 0){
    document.getElementById('menu-content').hidden=false;
    sessionStorage.setItem('menu', 1);
  } else {
    document.getElementById('menu-content').hidden=true;
    sessionStorage.setItem('menu', 0);
  }
}

function closem(){
  document.getElementById('menu-content').hidden=true;
  sessionStorage.setItem('menu', 0);
}

function example(){
  swal("Choose An Example", {
    buttons: {
      val1: {
        text: "Hello World",
        value: "val1"
      },
      val2: {
        text: "Quick Quiz",
        value: "val2"
      },
      val3: {
        text: "Random Quiz",
        value: "val3"
      },
      cancel: false,
    },
  })
  .then((value) => {
    closem();
    if(`${value}` == "val1"){
      document.getElementById('input').value='print Hello World!'
    }
    if(`${value}` == "val2"){
      qq();
    }
    if(`${value}` == "val3"){
      rq();
    }
  });
}

var name = sessionStorage.getItem("username");

//Msg Arrays
var users = ['mukund'];
var titles = ['Bug Report Response'];
var msgs = ["Hello, Mukund! The bug that you reported is not a valid issue. You may have tried using the buttons when they weren't functional"];

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
  if(!name){
    var name = prompt("What's your username?");
    if(name){
      sessionStorage.setItem("username", name);
      document.getElementById('name').innerHTML=name;
      alert('Successfully Signed In')
    } else {alert('Invalid Username');}
  }
  closem();
}

function logout(){
  if(name){
    if(confirm('Are You Sure?')){
      sessionStorage.removeItem('username');
      alert('Logged Out')
      document.getElementById('name').innerHTML="";
    } else {
      alert('Log out Cancelled')
    }
  }
  closem();
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
  closem();
}

//Share Code with Link
function scl(){
  var txt = document.getElementById('input').value;
  if(document.location.href.includes('?code=')){
    var out = "https://kiwuthegamer.github.io/Kivon/Code/Alpha/0.9?code="+txt.replace(/\n/g,'\\n').replace(/ /,'%20')
  } else {
    var out = "https://kiwuthegamer.github.io/Kivon/Code/Alpha/0.9?code="+txt.replace(/\n/g,'\\n').replace(/ /,'%20')
  }
  ta = document.createElement("textarea");
  ta.textContent = out;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  swal('Copied Link To Clipboard', '', 'success');
  closem();
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
  if(sessionStorage.getItem("username")){
    var bug = prompt("What does the the bug do?");
    if(bug){
      var rec = prompt("How to recreate it?");
      if(rec){
        sendEmail('Kivon Bug Reported', 'Username: '+name+'<br><br><br>What does the the bug do?<br><br>'+bug+'<br><br><br>How to recreate it?<br><br>'+rec);
        alert('Bug Reported');
      } else {
        alert('Invalid')
        return;
      }
    } else {
      alert('Invalid')
      return;
    }
  } else {signin();}
  closem();
}

function suggest(){
  if(sessionStorage.getItem("username")){
    var name = sessionStorage.getItem("username")
    var sug = prompt("Explain your suggestion")
    if(sug){
      sendEmail('Kivon Suggestion Sent', sug+'<br><br><br>From: '+name);
      alert('Suggestion Sent')
    } else {
      alert('Suggestion Cancelled')
    }
  } else {signin();}
  closem();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

//Quick Quiz
function qq(){
  var txt = "alert Quiz!\n\nvar res1 $prompt Question 1: 2+2=?\nvar res2 $prompt Question 2: 5+10=?\nvar res3 $prompt Question 3: 15+20=?\n\nprint Q1 - \nif res1 = 4 then\nprint Correct\nelse\nprint Wrong\nend\n\nprint \\n Q2 - \nif res2 = 15 then\nprint Correct\nelse\nprint Wrong\nend\n\nprint \\n Q3 - \nif res3 = 35 then\nprint Correct\nelse\nprint Wrong\nend\n"
  document.getElementById('input').value=txt;
  closem();
}

//Random Quiz
function rq(){
  var txt = "var num1 $rand 1 10\nvar num2 $rand 1 10\n\nvar ans $calc add num1 num2\n\nvar res $prompt What is $num1 + $num2 ?\n\nif ans = res then\nprint Correct!\nelse\nprint Wrong, the answer was $ans\nend";
  document.getElementById('input').value=txt;
  closem();
}

//Guide Alerts
function guide(){
  window.open('https://kiwuthegamer.github.io/Kivon/HomePage/', "_self")
}

//Reset Function
function reset(){
  closem();
  start();
}

//Print Function
function prent(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}

//Starter
start();

//ctrl+enter Run
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