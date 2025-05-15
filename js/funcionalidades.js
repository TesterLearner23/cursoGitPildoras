function cambiarColor(){
   let element = document.getElementById("main-title");
   state = element.getAttribute("style")==="color:orange";
   state ? element.setAttribute("style","color:green"):element.setAttribute("style","color:orange");
   state = !state;
}