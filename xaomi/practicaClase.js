
 inicio=()=>{
let boton= document.getElementById("botonR");
boton.addEventListener("click",otraPagina);
let botonFinal= document.getElementById("botonFinal");
botonFinal.addEventListener("click",otraPagina);
}

var otraPagina=(e)=>{
e.preventDefault();
window.location='https://www.betisweb.com/foro/';
}
window.addEventListener("DOMContentLoaded", inicio);