//global arrays

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
  return decodeURIComponent(results[2].replace(/\+/g, ' ').replace(/\\n/g,'\n'));
}

$(document).ready(function() {
  document.getElementById('input').value=getParameterByName('code');
});

//Text Getter

function text(start){
  var output = [];
  var i = start;
  while(words[i] != undefined){
    if(vars.indexOf(words[i].replaceAll('$',''))!=-1){
      output.push(varv[vars.indexOf(words[i].replaceAll('$',''))])
    } else {
      if(words[i-1]=="\\n"){
        output.push('\n'+words[i]);
      } else {
        if(words[i]!='\\n'){
          output.push(words[i]);
        }
      }
    }
    i = i+1;
  }
  return(output.join(' '));
}

//Run Function
function run(){
  vars = [];
  varv = [];
  var prevcond = "";
  var cfuncs = [];
  var cfuncv = [];
  var input = document.getElementById('input').value;
  var output = document.getElementById('output').value="";
  var lines = input.split('\n');
  for(var i=0; i<lines.length; i++){
    var funcs = ['print','alert','prompt','var','if','\\\\','end','','else', 'function', 'func', 'rick'];
    words = lines[i].split(' ')
    if(words[0]=="print"){//print function
      prent(text(1))
    }
    if(words[0]=="alert"){//alert function
      alert(text(1))
    }
    if(words[0]=="prompt"){//prompt function
      prompt(text(1));
    }
    if(words[0]=="var"){//variable function
      var num = vars.indexOf(words[1]);
      if(num!=-1){//set value variable
        if(words[2]=="$prompt"){
          var vra = prompt(text(3))
          varv.splice(num, 1, vra);
        } else {
          if(words[2]=="$rand"){
            var num1 = parseInt(words[3]);
            var num2 = parseInt(words[4]);
            varv.splice(num, 1, getRandomInt(num1, num2));
          } else {
            if(words[2]=="$calc"){
              var oper = words[3];
              var val1;
              var val2;
              if(vars.indexOf(words[4])==-1){//num1 is integer
                if(vars.indexOf(words[5])==-1){//num2 is integer
                val1 = parseInt(words[4]);
                val2 = parseInt(words[5]);
                } else {//num2 is variable
                val1 = parseInt(words[4]);
                val2 = vars.indexOf(words[5]);
                }
              } else {//num1 is variable
                if(vars.indexOf(words[5])==-1){//num2 is integer
                val1 = vars.indexOf(words[4]);
                val2 = parseInt(words[5]);
                } else {//num2 is variable
                val1 = vars.indexOf(words[4]);
                val2 = vars.indexOf(words[5]);
                }
              }
              if(oper == "add"){
                var res = val1+val2
              }
              if(oper == "sub"){
                var res = val1-val2
              }
              if(oper == "mul"){
                var res = val1*val2
              }
              if(oper == "div"){
                var res = val1/val2
              }
              varv.splice(num, 1, res);
            } else {
                varv.splice(num, 1, text(2));
              }
            }
          }
      } else {//new variable
        if(words[2]=="$prompt"){
          var vra = prompt(text(3))
          vars.push(words[1]);
          varv.push(vra);
        } else {
          if(words[2]=="$rand"){
            var num1 = parseInt(words[3]);
            var num2 = parseInt(words[4]);
            vars.push(words[1]);
            varv.push(getRandomInt(num1, num2));
          } else {
            if(words[2]=="$calc"){
              var oper = words[3];
              var val1;
              var val2;
              if(vars.indexOf(words[4])==-1){//num1 is integer
                if(vars.indexOf(words[5])==-1){//num2 is integer
                val1 = parseInt(words[4]);
                val2 = parseInt(words[5]);
                } else {//num2 is variable
                val1 = parseInt(words[4]);
                val2 = varv[vars.indexOf(words[5])];
                }
              } else {//num1 is variable
                if(vars.indexOf(words[5])==-1){//num2 is integer
                val1 = varv[vars.indexOf(words[4])];
                val2 = parseInt(words[5]);
                } else {//num2 is variable
                val1 = varv[vars.indexOf(words[4])];
                val2 = varv[vars.indexOf(words[5])];
                }
              }
              if(oper == "add"){
                var res = val1+val2;
              }
              if(oper == "sub"){
                var res = val1-val2;
              }
              if(oper == "mul"){
                var res = val1*val2;
              }
              if(oper == "div"){
                var res = val1/val2;
              }
              vars.push(words[1]);
              varv.push(res);
            } else {
          vars.push(words[1]);
          varv.push(text(2));
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
        if(var1==var2){
          var endl1 = lines.indexOf('end', i);
          var endl2 = lines.indexOf('else', i);
          if(endl1 != -1 && endl2 != -1){
            if(endl1 < endl2){
              var i = endl1;
            } else {
              var i = endl2;
            }
          } else {
            if(endl1 == -1){
              var i = endl2;
            }
            if(endl2 == -1){
              var i = endl1;
            }
          }
          var prevcond = false
        } else {
          var prevcond = true
        }
      }
      if(words[2]=="="){
        if(var1!=var2){
          var endl1 = lines.indexOf('end', i);
          var endl2 = lines.indexOf('else', i);
          if(endl1 != -1 && endl2 != -1){
            if(endl1 < endl2){
              var i = endl1;
            } else {
              var i = endl2;
            }
          } else {
            if(endl1 == -1){
              var i = endl2;
            }
            if(endl2 == -1){
              var i = endl1;
            }
          }
          var prevcond = false
        } else {
          var prevcond = true
        }
      }
    }
    if(words[0] == 'else'){
      if(prevcond==true){
        i = lines.indexOf('end', i)
      }
    }
    if(words[0] == 'function'){
      cfuncs.push(words[1]);
      cfuncv.push(i);
      i = lines.indexOf('end f', i);
    }
    if(words[0] == 'func'){
      var prevloc = i;
      var loc = cfuncv[cfuncs.indexOf(words[1])];
      i = loc;
      if(words[2] != undefined){
        var rptf = words[2];
        var curr = 1
      }
    }
    if(words[0] == 'end'){
      if(words[1] == 'f'){
        if(curr < rptf){
          i = loc;
          curr = curr+1
        } else {
          i = prevloc;
        }
      }
    }
    if(lines.includes('rick roll me')){
      window.open('https://rb.gy/enaq3a');
    }
    if(funcs.includes(words[0])==false){
      var val = document.getElementById('output');
      var numm = i-(-1);
      val.value = 'Error on line '+ numm;
      return;
    }
  }
}