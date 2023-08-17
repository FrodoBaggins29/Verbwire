//These are the boolean control/values for whether the checkboxes were clicked or not


let echo = false;
let address = window.location.href;
let addressPage1 = "https://slightequallocks.renenel1.repl.co/";
let addressPage2 = "https://slightequallocks.renenel1.repl.co/page2.html";
let addressPage3 = "https://slightequallocks.renenel1.repl.co/page3.html";
let addressPage4 = "https://slightequallocks.renenel1.repl.co/page4.html";
let addressControlPage1 = false;
let addressControlPage2 = false;
let addressControlPage3 = false;
let addressControlPage4 = false;
let addressControlPage5 = false;
let toSend = `${address}${sessionStorage}`;
console.log(toSend);

if (address === addressPage1) {
  sessionStorage.setItem("alpha", "false");
  sessionStorage.setItem("beta", "false");
  sessionStorage.setItem("charlie", "false");
  sessionStorage.setItem("delta", "false");
} else {
  //sessionStorage.getItem("alpha","beta","charlie","delta");
  //sessionStorage.getItem("beta");
  //sessionStorage.getItem("charlie");
  //sessionStorage.getItem("delta");
}



/*If the checkbox is clicked it will generate a unique link solely for option A/Checkbox1. This tells us that the end-user using 'slightequallocks.renenel1.repl.co' clicked option A/Checkbox1.*/
function checkbox1() {
  let checkbox1 = document.getElementById("firstAspect");
  checkbox1.addEventListener("change", () => {
    if (checkbox1.checked) {
      text.innerHTML = " Check box1 is checked. ";
      sessionStorage.setItem("alpha", "true");
      /*In a fully implememnted version the link below will be provided by an api of sorts - in this perculier case, the bit.ly api*/
      elUno.href = "https://bit.ly/3Yu1kya"

    } else {
      text.innerHTML = "Check box1 is not checked";
      sessionStorage.setItem("alpha", "false");

    }
  }
  );
}

function checkbox2() {
  let checkbox2 = document.getElementById("secondAspect");
  checkbox2.addEventListener("change", () => {
    if (checkbox2.checked) {
      text2.innerHTML = " Check box2 is checked. ";
      sessionStorage.setItem("beta", "true");
      /*Notice the link below is different for each option/checkbox as we need to see which option the end user clicked on*/
      elUno.href = "https://bit.ly/47gNKC9"
    } else {
      text2.innerHTML = "Check box2 is not checked";
      sessionStorage.setItem("beta", "false");
    }
  });
}

function checkbox3() {
  let checkbox3 = document.getElementById("thirdAspect");
  checkbox3.addEventListener("change", () => {
    if (checkbox3.checked) {
      text3.innerHTML = " Check box3 is checked. ";
      sessionStorage.setItem("charlie", "true");
      elUno.href = "https://bit.ly/47gEnSW"
    } else {
      text3.innerHTML = "Check box3 is not checked";
      sessionStorage.setItem("charlie", "false");
    }
  });
}

function checkbox4() {
  let checkbox4 = document.getElementById("fourthAspect");
  checkbox4.addEventListener("change", () => {
    if (checkbox4.checked) {
      text4.innerHTML = " Check box4 is checked. ";
      sessionStorage.setItem("delta", "true");
      elUno.href = "https://bit.ly/3Ynpp9J"
    } else {
      text4.innerHTML = "Check box4 is not checked";
      sessionStorage.setItem("delta", "false");
    }
  });
}

function checkbox5() {
  let checkbox5 = document.getElementById("fifthAspect");
  checkbox5.addEventListener("change", () => {
    if (checkbox5.checked) {
      text5.innerHTML = " Check box5 is checked. ";
      sessionStorage.setItem("echo", "true");
      elUno.href = "https://bit.ly/3s4N5DO"
    } else {
      text5.innerHTML = "Check box5 is not checked";
      sessionStorage.setItem("echo", "false");
    }
  });
}

function clickCounter() {
  if (typeof (Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

//use of the verbwire api;
function saveChoicesText() {

  const form = new FormData();

  form.append('chain', 'fuji');
  form.append('recipientAddress', '0x73682121de0aB465d5C17952a9E8eE0db3EFd86e');
  form.append('data', toSend);




  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'X-API-Key': 'sk_live_806b3d58-b193-4a2d-9429-f3febb8a0d5b'

    }
  };

  options.body = form;

  fetch('https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

function createQR() {

  let qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address}${sessionStorage}`;
  console.log(qrLink);
}
function start() {

  if (address === addressPage2) {

    addressControlPage2 = true;
    checkbox5();

  } else if (address === addressPage1) {

    addressControlPage1 = true;
    checkbox1();
    checkbox2();
    checkbox3();
    checkbox4();
    saveChoicesText();//use of the verbwire api
    createQR();

  }
}

start(); 
