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
`; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
