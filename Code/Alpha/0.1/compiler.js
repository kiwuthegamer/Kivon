function run(){
  var input = document.getElementById('input').value;
  var lines = input.split('\n');
  var i;
  for(i=0; i<lines.length; i++){
    var words = lines[i].split(' ')
    if(words[0]=="print"){
      var prnttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
      prent(prnttxt.replace(/ undefined/g,''))
    }
    if(words[0]=="alert"){
      var alrttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
      alert(alrttxt.replace(/ undefined/g,''))
    }
    if(words[0]=="prompt"){
      var prmpttxt = words[1]+" "+words[2]+" "+words[3]+" "+words[4]+" "+words[5]+" "+words[6]+" "+words[7]+" "+words[8]+" "+words[9]+" "+words[10]+" "+words[11]
      prompt(prmpttxt.replace(/ undefined/g,''))
    }
  }
}

function guide(){
  alert("Welcome To Kivon Alpha 0.1");
  alert("Command Name - 𝘚𝘺𝘯𝘵𝘢𝘹");
  alert('Print - print 𝘵𝘦𝘹𝘵');
  alert('Alert - alert 𝘵𝘦𝘹𝘵');
  alert('Prompt - prompt 𝘵𝘦𝘹𝘵');
}

function reset(){
  document.getElementById('output').value = ""
}

function prent(text){
  var output = document.getElementById('output');
  output.value = output.value+text+'\n';
}