//Extension Arrays
var funs = [];
var code = [];

//Developer Tools
function dev(){
  swal("Choose An Option",'', {
    buttons: {
      val1: {
        text: "Custom Functions",
        value: "f"
      },
      val2: {
        text: "Custom Colors",
        value: "c"
      },
      val3: {
        text: "Custom Buttons",
        value: "b"
      },
      cancel: true,
    },
  })
  .then((value) => {
    if(`${value}` == "f"){
      ext();
    }
    if(`${value}` == "c"){
      col();
    }
    if(`${value}` == "b"){
      but();
    }
  });
}

//Custom Buttons

var custb = [];

function but(){
  swal("Choose An Option",'', {
    buttons: {
      val1: {
        text: "Current Custom Buttons",
        value: "c"
      },
      val2: {
        text: "Import A Button",
        value: "i"
      },
      cancel: true,
    },
  })
  .then((value) => {
    if(`${value}` == "c"){
      if(custb.length>0){
        swal('You have '+custb.length+' custom button(s) on', custb.join(', '),'info')
      } else {
        swal("","You don't have any custom buttons on right now", "info")
      }
    }
    if(`${value}` == "i"){
      var fileu = document.createElement('input');
      fileu.type = "file"
      fileu.accept=".kbutton"
      fileu.className="swalfile"
      swal({
        content: fileu,
      })
      .then((value) => {
        var file = fileu.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
          var cm = document.getElementById('context-menu');
          var node = document.createElement("div");
          node.className = "item";
          node.onclick = function() {document.getElementById("context-menu").classList.remove("visible"); eval(reader.result)};
          var textnode = document.createTextNode(file.name.replace('.kbutton',''));
          node.appendChild(textnode);
          cm.appendChild(node);
          custb.push(textnode);
        };
      });
    }
  });
}

//Custom Functions
function ext(){
  swal("Choose An Option",'', {
    buttons: {
      val1: {
        text: "Currect Custom Functions",
        value: "c"
      },
      val2: {
        text: "Import A Function",
        value: "i"
      },
      cancel: true,
    },
  })
  .then((value) => {
    if(`${value}` == "c"){
      if(funs.length>0){
        swal('You have '+funs.length+' function(s) on', funs.join(', '),'info')
      } else {
        swal("","You don't have any functions on right now", "info")
      }
    }
    if(`${value}` == "i"){
      var fileu = document.createElement('input');
      fileu.type = "file"
      fileu.accept=".kfunction"
      fileu.className="swalfile"
      swal({
        content: fileu,
      })
      .then((value) => {
        var file = fileu.files[0];
        funs.push(file.name.replace('.kfunction',''));
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => code.push(reader.result);
      });
    }
  });
}

//Custom Colors
function col(){
  swal("Choose An Option",'', {
    buttons: {
      val1: {
        text: "Import A Color Scheme",
        value: "i"
      },
      val2: {
        text: "Revert Colors",
        value: "r"
      },
      cancel: true,
    },
  })
  .then((value) => {
    if(`${value}` == "i"){
      var fileu = document.createElement('input');
      fileu.type = "file"
      fileu.accept=".kcolors"
      fileu.className="swalfile"
      swal({
        content: fileu,
      })
      .then((value) => {
        var file = fileu.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function() {
          var cols = reader.result.split('\n');
          var r = document.querySelector(':root');
          r.style.setProperty('--main-bg-color', cols[0]);
          r.style.setProperty('--main-button-color', cols[1]);
          r.style.setProperty('--main-text-color', cols[2]);
          r.style.setProperty('--main-text-color2', cols[3]);
          r.style.setProperty('--main-border-color', cols[4]);
          r.style.setProperty('--main-dark-button-color', cols[5]);
        };
      });
    }
    if(`${value}` == "r"){
      swtchm(0);
    }
  });
}

//Text Getter
function text(start){
  var output = [];
  var i = start;
  while(words[i] != undefined){
    if(words[i].includes('$')){//array or variable
      if(words[i].includes('[')){//array
        var num = words[i].substr(words[i].indexOf('[')+1, words[i].indexOf(']')-1 - words[i].indexOf('[')+1);
        var ar = words[i].substr(1, words[i].indexOf(']')-1);
        if(isNaN(num)){
          if(num.includes('$')){
            output.push(varv[vars.indexOf(ar)][varv[vars.indexOf(num)]])
          }
          if(num == "rand"){
            output.push(varv[vars.indexOf(ar)][getRandomInt(0, varv[vars.indexOf(ar)].length)]+' ');
          }
          if(num == "length"){
            output.push(varv[vars.indexOf(ar)].length+' ');
          }
        } else {
          output.push(varv[vars.indexOf(ar)][num]+' ')
        }
        var i = i+1;
        continue;
      } else {//variable
        output.push(varv[vars.indexOf(words[i].replace('$',''))]+' ')
      }
      var i = i+1;
      continue;
    }
    if(words[i] == "\\n"){//new line
      output.push('\n');
      var i = i+1;
      continue;
    }
    //regular text
    output.push(words[i]+' ');
    var i = i+1;
    continue;
  }
  return(output.join(''))
}

function arrtext(start, line){
  var awords = line.split(' ');
  var output = [];
  var i = start;
  while(awords[i] != undefined){
    if(vars.indexOf(awords[i].replaceAll('$',''))!=-1){
      output.push(varv[vars.indexOf(awords[i].replaceAll('$',''))]);
    } else {
      output.push(awords[i])
    }
    i = i+1;
  }
  return(output);
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
  var funcs = ['print','alert','prompt','var','if','\\\\','end','','else', 'function', 'func', 'rick', 'arr'];
  for(var i=0; i<lines.length; i++){
    words = lines[i].split(' ')
    if(words[0]=="print"){//print function
      print(text(1))
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
              if(words[4].includes('$')){//num1 is variable
                if(words[5].includes('$')){//num2 is variable
                  val1 = parseInt(varv[vars.indexOf(words[4].replaceAll('$',''))]);
                  val2 = parseInt(varv[vars.indexOf(words[5].replaceAll('$',''))]);
                } else {//num2 is number
                  val1 = parseInt(varv[vars.indexOf(words[4].replaceAll('$',''))]);
                  val2 = parseInt(words[5]);
                }
              } else {//num1 is number
                if(words[5].includes('$')){//num2 is variable
                  val1 = parseInt(words[4]);
                  val2 = parseInt(varv[vars.indexOf(words[5].replaceAll('$',''))]);
                } else {//num2 is number
                  val1 = parseInt(words[4]);
                  val2 = parseInt(words[5]);
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
      if(words[1].includes('$')){
        if(words[3].includes('$')){
          var var1 = varv[vars.indexOf(words[1].replaceAll('$',''))];
          var var2 = varv[vars.indexOf(words[3].replaceAll('$',''))];
        } else {
          var var1 = varv[vars.indexOf(words[1].replaceAll('$',''))];
          var var2 = words[3];
        }
      } else {
        if(words[3].includes('$')){
          var var1 = words[1];
          var var2 = varv[vars.indexOf(words[3].replaceAll('$',''))];
        } else {
          var var1 = words[1];
          var var2 = words[3];
        }
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
    /* Arrays
    if(words[0] == 'arr'){
      var num = vars.indexOf(words[1]);
      if(words[2].includes('$')){
        if(words[2].substr(1, 3) == "add"){
          if(words[3].includes('$')){
            if(words[2].replace('$add', '')){
              varv[num].splice(words[2].replace('$add', ''), 0, varv[vars.indexOf(words[3])]);
            } else {
              varv[num].push(varv[vars.indexOf(words[3])]);
            }
          } else {
            if(words[2].replace('$add', '')){
              varv[num].splice(words[2].replace('$add', ''), 0, words[3]);
            } else {
              varv[num].push(words[3]);
            }
          }
        }
        if(words[2].substr(1, 6) == "remove"){
          if(words[3]){
            if(isNaN(words[3])){
              varv[num].splice(varv[num].indexOf(words[3]), 1);
            } else {
              varv[num].splice(words[3], 1);
            }
          } else {
            delete vars[num];
          }
        }
      } else {
        if(num!=-1){//set value array
          vars[num] = words[1];
          varv[num] = arrtext(2, lines[i]);
        } else {//new variable
          vars.push(words[1]);
          varv[varv.length] = arrtext(2, lines[i]);
        }
      }
    }
    */
    if(lines.includes('rick roll me')){
      window.open('https://rb.gy/enaq3a');
    }
    if(funs.includes(words[0])){
      eval(code[funs.indexOf(words[0])]);
      continue;
    }
    if(funcs.includes(words[0])==false){
      var val = document.getElementById('output');
      var numm = i-(-1);
      val.value = 'Error on line '+ numm;
      return;
    }
  }
}
