function run(){
  var input = document.getElementById('input').value;
  var output = document.getElementById('output').value=""
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
        var prnttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
        prent(prnttxt.replace(/ undefined/g,''))
      }
    }
    if(words[0]=="alert"){
      var alrttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
      alert(alrttxt.replace(/ undefined/g,''))
    }
    if(words[0]=="prompt"){
      var prmpttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
      prompt(prmpttxt.replace(/ undefined/g,''));
    }
    if(words[0]=="var"){
      if(words[2]==undefined){
        var num = vars.indexOf(words[1]);
        var val = varv[num]
        prent(val)
      } else {
        var num = vars.indexOf(words[1]);
        if(num!=-1){
          varv.splice(num, 1, words[2]);
        } else {
          vars.push(words[1]);
          varv.push(words[2]);
        }
      }
    }
  }
}

function guide(){
  alert("Welcome To Kivon Alpha 0.2");
  alert("Command Name - 𝘚𝘺𝘯𝘵𝘢𝘹");
  alert('Print - print 𝘵𝘦𝘹𝘵');
  alert('Print(New Line) - print \\n')
  alert('Alert - alert 𝘵𝘦𝘹𝘵');
  alert('Prompt - prompt 𝘵𝘦𝘹𝘵');
  alert('Variable(Replace/New) - var 𝘯𝘢𝘮𝘦 𝘷𝘢𝘭𝘶𝘦')
  alert('Variable(Load) - var 𝘯𝘢𝘮𝘦')
}

function clear(){
  document.getElementById('input').value = ""
}

function reset(){
  document.getElementById('output').value = ""
}

function prent(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}