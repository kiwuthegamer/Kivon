// Starting 
function start(){
  document.getElementById('output').value="Kivon Alpha 0.5";
}

//Run Function
function run(){
  var input = document.getElementById('input').value;
  var output = document.getElementById('output').value="";
  var lines = input.split('\n');
  var vars = [];
  var varv = [];
  var i;
  for(i=0; i<lines.length; i++){
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
  }
}
//character sheet
function chsh(){
  var txt = "var name $prompt Name?\nvar age $prompt Age?\nprint Name: \nprint $var name\nprint \\n\nprint Age: \nprint $var age";
  document.getElementById('input').value=txt;
}
//quick quiz
function qq(){
  var txt = "alert Quiz!\nalert Question 1 - \nvar ans1 $prompt 2+2=?\nalert Question 2 - \nvar ans2 $prompt 5+10=?\nalert Question 3 - \nvar ans3 $prompt 15+20=?\nprint Q1\nprint \\n\nprint Your Answer: \nprint $var ans1\nprint \\n\nprint Correct Answer: 4\nprint \\n\nprint \\n\nprint Q2\nprint \\n\nprint Your Answer: \nprint $var ans2\nprint \\n\nprint Correct Answer: 15\nprint \\n\nprint \\n\nprint Q3\nprint \\n\nprint Your Answer: \nprint $var ans3\nprint \\n\nprint Correct Answer: 35\nprint \\n\nprint \\n"
  document.getElementById('input').value=txt;
}

//guide alerts
function guide(){
  alert("Welcome To Kivon Alpha 0.5");
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
//reset function
function reset(){
  document.getElementById('output').value = ""
}
//print function
function prent(text){
  var output = document.getElementById('output');
  output.value = output.value+text;
}
//example button
function examples(){
  
}
//starter
start();