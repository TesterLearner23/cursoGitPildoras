function overSubtitle(){
   let element = document.getElementById("main-subtitle");
   element.setAttribute("style","color:cyan");
}

function leaveSubtitle(){
   let element = document.getElementById("main-subtitle");
   element.setAttribute("style","color:antiquewhite");
}

function cambiarColor(){
   let element = document.getElementById("main-title");
   state = element.getAttribute("style")==="color:orange";
   state ? element.setAttribute("style","color:green"):element.setAttribute("style","color:orange");
}

function cambiarColor2(){
   let element = document.getElementById("main-title");
   state = element.getAttribute("style")==="color:blue";
   state ? element.setAttribute("style","color:red"):element.setAttribute("style","color:blue");
}