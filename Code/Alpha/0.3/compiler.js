function start(){
  document.getElementById('output').value="Kivon Alpha 0.3";
}

function run(){
  var input = document.getElementById('input').value;
  var output = document.getElementById('output').value="";
  var lines = input.split('\n');
  var vars = [];
  var varv = [];
  var i;
  for(i=0; i<lines.length; i++){
    var words = lines[i].split(' ')
    if(words[0]=="print"){
      if(words[1]=="\\n"){
        prent('\n')
      } else {
        if(words[1]=="$var"){
          var num = vars.indexOf(words[2]);
          var val = varv[num]
          prent(val)
        } else {
          var prnttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]+" "+words[12]
          prent(prnttxt.replace(/ undefined/g,''))
        }
      }
    }
    if(words[0]=="alert"){
      if(words[1]=="$var"){
        var num = vars.indexOf(words[2]);
        var val = varv[num]
        var loc = parseInt(words[3]);
        var alrttxt = [words[4], words[5], words[6], words[7], words[8], words[9], words[10], words[11]]
        alrttxt.splice(loc, 0, val)
        alert(alrttxt.join(" "))
      } else {
        var alrttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
        alert(alrttxt.replace(/ undefined/g,''))
      }
    }
    if(words[0]=="prompt"){
      if(words[1]=="$var"){
        var num = vars.indexOf(words[2]);
        var val = varv[num]
        var loc = parseInt(words[3]);
        var prmpttxt = [words[4], words[5], words[6], words[7], words[8], words[9], words[10], words[11]]
        prmpttxt.splice(loc, 0, val)
        prompt(prmpttxt.join(" "))
      } else {
        var prmpttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
        prompt(prmpttxt.replace(/ undefined/g,''));
      }
    }
    if(words[0]=="var"){
      var num = vars.indexOf(words[1]);
      if(num!=-1){
        varv.splice(num, 1, words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11].replace(/ undefined/g,''));
      } else {
        var wors = words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
        vars.push(words[1]);
        varv.push(wors.replace(/ undefined/g,''));
      }
    }
  }
}

function guide(){
  alert("Welcome To Kivon Alpha 0.3");
  alert("Command Name - 𝘚𝘺𝘯𝘵𝘢𝘹");
  alert('Print - print 𝘵𝘦𝘹𝘵');
  alert('Print(New Line) - print \\n')
  alert('Print(Variable) - print $var 𝘷𝘢𝘳_𝘯𝘢𝘮𝘦')
  alert('Alert - alert 𝘵𝘦𝘹𝘵');
  alert('Alert(Variable) - alert $var 𝘷𝘢𝘳_𝘯𝘢𝘮𝘦 𝘷𝘢𝘳𝘪𝘢𝘣𝘭𝘦_𝘭𝘰𝘤𝘢𝘵𝘪𝘰𝘯 𝘵𝘦𝘹𝘵')
  alert('Prompt - prompt 𝘵𝘦𝘹𝘵');
  alert('Prompt(Variable) - prompt $var 𝘷𝘢𝘳_𝘯𝘢𝘮𝘦 𝘷𝘢𝘳𝘪𝘢𝘣𝘭𝘦_𝘭𝘰𝘤𝘢𝘵𝘪𝘰𝘯 𝘵𝘦𝘹𝘵')
  alert('Variable - var 𝘷𝘢𝘳_𝘯𝘢𝘮𝘦 𝘷𝘢𝘭𝘶𝘦')
}

function reset(){
  document.getElementById('output').value = ""
}

function prent(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}

start();