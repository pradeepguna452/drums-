document.querySelector("body").style.backgroundColor="#283149";

var numberOfDrum=document.querySelectorAll(".drum").length;
for (i=0 ; i<numberOfDrum ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
 {
  var buttonInnerHTML = this.innerHTML;
  console.log(buttonInnerHTML);

  switch (buttonInnerHTML){
        case "Z":
            var sound0= new Audio("sounds/sound0.mp3");
             sound0.play();
             break;

        case "X":
             var sound1= new Audio("sounds/sound1.mp3");
            sound1.play();
break;

         case "C":
             var sound2 = new Audio("sounds/sound2.mp3");
             sound2.play();
break;

         case "V":
             var sound3 = new Audio("sounds/sound3.mp3");
             sound3.play();
break;

         case "B":
             var sound4 = new Audio("sounds/sound4.mp3");
             sound4.play();
break;

        case "N":
             var sound5 = new Audio("sounds/sound5.mp3");
             sound5.play();
break;

         case "M":
             var sound6 = new Audio("sounds/sound6.mp3");
             sound6.play();
break;
default: console.log(buttonInnerHTML);
  }
 });
}

