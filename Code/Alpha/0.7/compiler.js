//Starting
function start(){
  document.getElementById('output').value="Kivon Alpha 0.7";
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

//Run Function
function run(line){
  var input = document.getElementById('input').value;
  var output = document.getElementById('output').value="";
  var lines = input.split('\n');
  var vars = [];
  var varv = [];
  var i;
  for(i=0; i<lines.length; i++){
    var funcs = ['print','alert','prompt','var','if','repeat'];
    var words = lines[i].split(' ')
    if(words[0]=="print"){//print function
      if(words[1]=="\\n"){//new line print
        prent('\n')
      } else {
        if(words[1]=="$var"){//variable print
          var num = vars.indexOf(words[2]);
          var val = varv[num]
          prent(val)
        } else {//print
          var prnttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]
          prent(prnttxt.replace(/ undefined/g,''))
        }
      }
    }
    if(words[0]=="alert"){//alert function
      if(words[1]=="$var"){//variable alert
        var num = vars.indexOf(words[2]);
        var val = varv[num]
        var loc = parseInt(words[3]);
        var alrttxt = [words[4], words[5], words[6], words[7], words[8], words[9], words[10], words[11]]
        alrttxt.splice(loc, 0, val)
        alert(alrttxt.join(" "))
      } else {//alert
        var alrttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
        alert(alrttxt.replace(/ undefined/g,''))
      }
    }
    if(words[0]=="prompt"){//prompt function
      if(words[1]=="$var"){//variable prompt
        var num = vars.indexOf(words[2]);
        var val = varv[num]
        var loc = parseInt(words[3]);
        var prmpttxt = [words[4], words[5], words[6], words[7], words[8], words[9], words[10], words[11]]
        prmpttxt.splice(loc, 0, val)
        prompt(prmpttxt.join(" "))
      } else {//prompt
        var prmpttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
        prompt(prmpttxt.replace(/ undefined/g,''));
      }
    }
    if(words[0]=="var"){//variable function
      var num = vars.indexOf(words[1]);
      if(num!=-1){//set value variable
        if(words[2]=="$prompt"){
          var vra = prompt(words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11].replace(/ undefined/g,''))
          varv.splice(num, 1, vra);
        } else {
          varv.splice(num, 1, words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11].replace(/ undefined/g,''));
        }
      } else {//new variable
        if(words[2]=="$prompt"){
          var wors = words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
          var vra = prompt(wors.replace(/ undefined/g,''))
          vars.push(words[1]);
          varv.push(vra);
        } else {
          var wors = words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
          vars.push(words[1]);
          varv.push(wors.replace(/ undefined/g,''));
        }
      }
    }
    if(words[0]=="repeat"){
      var times = parseInt(words[1]);
      var ri;
      for(ri=0; ri<times; ri++){
    var words = lines[i].split(' ')
    if(words[2]=="print"){//print function
      if(words[3]=="\\n"){//new line print
        prent('\n')
      } else {
        if(words[3]=="$var"){//variable print
          var num = vars.indexOf(words[4]);
          var val = varv[num]
          prent(val)
        } else {//print
          var prnttxt = words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]
          prent(prnttxt.replace(/ undefined/g,''))
        }
      }
    }
    if(words[2]=="alert"){//alert function
      if(words[3]=="$var"){//variable alert
        var num = vars.indexOf(words[4]);
        var val = varv[num]
        var loc = parseInt(words[5]);
        var alrttxt = [words[6], words[7], words[8], words[9], words[10], words[11], words[12], words[13]]
        alrttxt.splice(loc, 0, val)
        alert(alrttxt.join(" "))
      } else {//alert
        var alrttxt = words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]
        alert(alrttxt.replace(/ undefined/g,''))
      }
    }
    if(words[2]=="prompt"){//prompt function
      if(words[3]=="$var"){//variable prompt
        var num = vars.indexOf(words[4]);
        var val = varv[num]
        var loc = parseInt(words[5]);
        var prmpttxt = [words[6], words[7], words[8], words[9], words[10], words[11], words[12], words[13]]
        prmpttxt.splice(loc, 0, val)
        prompt(prmpttxt.join(" "))
      } else {//prompt
        var prmpttxt = words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]
        prompt(prmpttxt.replace(/ undefined/g,''));
      }
    }
    if(words[2]=="var"){//variable function
      var num = vars.indexOf(words[3]);
      if(num!=-1){//set value variable
        if(words[4]=="$prompt"){
          var vra = prompt(words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13].replace(/ undefined/g,''))
          varv.splice(num, 1, vra);
        } else {
          varv.splice(num, 1, words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13].replace(/ undefined/g,''));
        }
      } else {//new variable
        if(words[4]=="$prompt"){
          var wors = words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]
          var vra = prompt(wors.replace(/ undefined/g,''))
          vars.push(words[3]);
          varv.push(vra);
        } else {
          var wors = words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]
          vars.push(words[3]);
          varv.push(wors.replace(/ undefined/g,''));
        }
      }
    }
    }
    }
    if(words[0]=="if"){
      var var1num = vars.indexOf(words[1]);
      var var2num = vars.indexOf(words[3]);
      if(var1num != -1){
        if(var2num != -1){
          var var1 = varv[var1num];
          var var2 = varv[var2num];
        } else {
          var var1 = varv[var1num];
          var var2 = words[3];
        }
      } else {
        if(var2num != -1){
          var var1 = words[1];
          var var2 = varv[var2num];
        } else {
          var var1 = words[1];
          var var2 = words[3];
        }
        var var1 = words[1];
      }
      if(words[2]=="!"){
        if(var1!=var2){
    var words = lines[i].split(' ');
    if(words[5]=="print"){//print function
      if(words[6]=="\\n"){//new line print
        prent('\n');
      } else {
        if(words[6]=="$var"){//variable print
          var num = vars.indexOf(words[7]);
          var val = varv[num];
          prent(val);
        } else {//print
          var prnttxt = words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]+" "+words[17];
          prent(prnttxt.replace(/ undefined/g,''));
        }
      }
    }
    if(words[5]=="alert"){//alert function
      if(words[6]=="$var"){//variable alert
        var num = vars.indexOf(words[7]);
        var val = varv[num];
        var loc = parseInt(words[8]);
        var alrttxt = [words[9], words[10], words[11], words[12], words[13], words[14], words[15], words[16]]
        alrttxt.splice(loc, 0, val);
        alert(alrttxt.join(" "));
      } else {//alert
        var alrttxt = words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16];
        alert(alrttxt.replace(/ undefined/g,''));
      }
    }
    if(words[5]=="prompt"){//prompt function
      if(words[6]=="$var"){//variable prompt
        var num = vars.indexOf(words[7]);
        var val = varv[num];
        var loc = parseInt(words[8]);
        var prmpttxt = [words[9], words[10], words[11], words[12], words[13], words[14], words[15], words[16]];
        prmpttxt.splice(loc, 0, val);
        prompt(prmpttxt.join(" "));
      } else {//prompt
        var prmpttxt = words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16];
        prompt(prmpttxt.replace(/ undefined/g,''));
      }
    }
    if(words[5]=="var"){//variable function
      var num = vars.indexOf(words[6]);
      if(num!=-1){//set value variable
        if(words[7]=="$prompt"){
          var vra = prompt(words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16].replace(/ undefined/g,''))
          varv.splice(num, 1, vra);
        } else {
          varv.splice(num, 1, words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16].replace(/ undefined/g,''));
        }
      } else {//new variable
        if(words[7]=="$prompt"){
          var wors = words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]
          var vra = prompt(wors.replace(/ undefined/g,''))
          vars.push(words[6]);
          varv.push(vra);
        } else {
          var wors = words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]
          vars.push(words[6]);
          varv.push(wors.replace(/ undefined/g,''));
        }
      }
    }
    }
        }
      if(words[2]=="="){
        if(var1==var2){
    var words = lines[i].split(' ')
    if(words[5]=="print"){//print function
      if(words[6]=="\\n"){//new line print
        prent('\n')
      } else {
        if(words[6]=="$var"){//variable print
          var num = vars.indexOf(words[7]);
          var val = varv[num]
          prent(val)
        } else {//print
          var prnttxt = words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]+" "+words[17]
          prent(prnttxt.replace(/ undefined/g,''))
        }
      }
    }
    if(words[5]=="alert"){//alert function
      if(words[6]=="$var"){//variable alert
        var num = vars.indexOf(words[7]);
        var val = varv[num]
        var loc = parseInt(words[8]);
        var alrttxt = [words[9], words[10], words[11], words[12], words[13], words[14], words[15], words[16]]
        alrttxt.splice(loc, 0, val)
        alert(alrttxt.join(" "))
      } else {//alert
        var alrttxt = words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]
        alert(alrttxt.replace(/ undefined/g,''))
      }
    }
    if(words[5]=="prompt"){//prompt function
      if(words[6]=="$var"){//variable prompt
        var num = vars.indexOf(words[7]);
        var val = varv[num];
        var loc = parseInt(words[8]);
        var prmpttxt = [words[9], words[10], words[11], words[12], words[13], words[14], words[15], words[16]];
        prmpttxt.splice(loc, 0, val);
        prompt(prmpttxt.join(" "));
      } else {//prompt
        var prmpttxt = words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16];
        prompt(prmpttxt.replace(/ undefined/g,''));
      }
    }
    if(words[5]=="var"){//variable function
      var num = vars.indexOf(words[6]);
      if(num!=-1){//set value variable
        if(words[7]=="$prompt"){
          var vra = prompt(words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16].replace(/ undefined/g,''))
          varv.splice(num, 1, vra);
        } else {
          varv.splice(num, 1, words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16].replace(/ undefined/g,''));
        }
      } else {//new variable
        if(words[7]=="$prompt"){
          var wors = words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]
          var vra = prompt(wors.replace(/ undefined/g,''))
          vars.push(words[6]);
          varv.push(vra);
        } else {
          var wors = words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]+" "+words[13]+" "+words[14]+" "+words[15]+" "+words[16]
          vars.push(words[6]);
          varv.push(wors.replace(/ undefined/g,''));
        }
      }
    }
        }
      }
    }
    if(words[0]=="\\\\"){
      continue;
    }
    if(funcs.includes(words[0])==false){
      var val = document.getElementById('output');
      val.value = val.value+'ERROR'
      return;
    }
  }
}

//character sheet
function chsh(){
  var txt = "var name $prompt Name?\nvar age $prompt Age?\nprint Name: \nprint $var name\nprint \\n\nprint Age: \nprint $var age";
  document.getElementById('input').value=txt;
}
//quick quiz
function qq(){
  var txt = "alert Quiz!\nalert Question 1 - \nvar res1 $prompt 2+2=?\nalert Question 2 - \nvar res2 $prompt 5+10=?\nalert Question 3 - \nvar res3 $prompt 15+20=?\nprint Q1 - \nif res1 = 4 then print Correct\nif res1 ! 4 then print Wrong\nprint \\n\nprint \\n\nprint Q2 - \nif res2 = 15 then print Correct\nif res2 ! 15 then print Wrong\nprint \\n\nprint \\n\nprint Q3 - \nif res3 = 35 then print Correct\nif res3 ! 35 then print Wrong"
  document.getElementById('input').value=txt;
}

//guide alerts
function guide(){
  window.open('https://kiwuthegamer.github.io/Kivon/HomePage/', "_self")
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