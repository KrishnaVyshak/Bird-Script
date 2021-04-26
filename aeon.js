if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var txt = `#Creating A Simple Script
PRINT("ENTER YOUR NAME")
VAR name = INPUT()
#Get the name

PRINT("ENTER YOUR AGE")
VAR age = INPUT_INT()
#Get the AGE

PRINT(name)
PRINT(age)
#Final Result
`;
  var speed = 80;

  function typeItOut () {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}
