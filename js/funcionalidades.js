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