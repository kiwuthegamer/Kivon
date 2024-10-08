function adm(){
  swal({
    content: {
      element: "input",
      attributes: {
        placeholder: "Enter Password",
        type: "password",
      },
    },
  })
  .then((value) => {
    if(passes.includes(`${value}`)){
      allow(`${value}`);
    } else {
      swal('Access Denied','Invalid Password','error');
    }
  });
}

function con(txt){
  var vals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
  var out = vals.indexOf(txt.charAt(0)) * 4
  var out = out + '_' + vals.indexOf(txt.charAt(1)) * 4
  return(out);
}

function uncon(txt){
  var vals = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
  var outs = txt.split('_');
  var out = vals[outs[0] / 4];
  var out = out + vals[outs[1] / 4];
  return(out);
}

function refl(){
  var ref = prompt('Reference Link');
  alert('https://kiwuthegamer.github.io/Kivon/HomePage/?ref='+con(ref));
}

function gPBN(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2]);
}

window.onload = (event) => {
  if(gPBN('ref')){
    emailjs.init("");
    var templateParams = {
      name: uncon(gPBN('ref')),
    };
    emailjs.send("","",templateParams)
    .then(() => {
      window.location.href = "https://kivon.kevingeorge.repl.co/HomePage/"
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }
};

var passes = ['pswrd11'];

var adminmode = 0;
function allow(pass){
  if(passes.includes(pass)){
    adminmode = 1
    swal('Access Granted','Welcome Admin','success')
    document.getElementsByName('dev').forEach((e) => {e.hidden = false})
    document.getElementById('home').innerHTML = "<h3>Kivon Developer Mode</h3><p><button onclick=\"refl()\">Create Reference Link</button></p>";
  } else {
    swal('Access Denied','','error')
  }
}

document.addEventListener('keyup', (event) => {
  if (event.key == '~') {
    swal({
      content: {
        element: "input",
        attributes: {
          placeholder: "Enter Password",
          type: "password",
        },
      },
    })
    .then((value) => {
      if(passes.includes(`${value}`)){
        allow(`${value}`);
      } else {
        swal('Access Denied','Invalid Password','error');
      }
    });
  }
});

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function send(){
  swal("Email: ","Please enter your email", {content:"input",})
  .then((value) => {
    if(validateEmail(`${value}`)==true){
      emailjs.init("");
      var templateParams = {
        message: `${value}`,
      };
      emailjs.send("","", templateParams)
      swal("Congratulations!", "You have successfully subscribed to The Kivon Newsletter",'success');
    } else {
      swal("Error!", "Invalid Email",'error');
    }
  });
}

function mcheck(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test (navigator.userAgent)){
    document.getElementById('iframe_container').hidden = true;
  } else {
    document.getElementById('iframe_container').hidden = false;
  }
}

setTimeout('mcheck()', 1000)