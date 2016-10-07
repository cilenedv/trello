var texto1 = document.getElementById('texto1');
var mensaje = document.getElementById('mensaje');
var btnForm = document.getElementById("btnForm");
var inpForm = document.getElementById("inpForm");

window.addEventListener("load", ocultar);

function ocultar(){
  texto1.addEventListener("click",mostrar);
  btnForm.addEventListener("clcik",lista); 
}
function  mostrar() {
  texto1.classList.add("oculta");
  mensaje.classList.remove("oculta");
}
function lista(){
  var conten = document.createElement("div");
  var titulo = document.createElement("h5");
  var enlace = document.createElement("a");
  titulo.innerHTML=this.previousSibling.value;
  conten.appendChild(titulo);
  conten.appendChild(enlace);
}