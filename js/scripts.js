var text = "Hello there!";
var textPosition = 0; 
var speed = 200;

//var tops = document.getElementbyID("top");


function typewriterHello() {
    document.querySelector("#hi").innerHTML = text.substring(0, textPosition) + "<span>|</span>";
  
    textPosition += 1

    if(textPosition != text.length){
      setTimeout(typewriterHello, speed);
    }

  }



window.addEventListener("load", typewriterHello);
console.log(window.innerWidth)
console.log(window.innerHeight)





  