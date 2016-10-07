window.addEventListener("load",function(){
  var texto1 = document.getElementById('texto1');
  var mensaje = document.getElementById('mensaje');
  var btnForm = document.getElementById("btnForm");
  var inpForm = document.getElementById("inpForm");

  mensaje.style.display = "none";
  texto1.addEventListener("click",function(e){
    e.preventDefault();
    mensaje.style.display = "block";
    texto1.style.display = "none";
    mensaje.style.display="inline-block";
    inpForm.focus();
  });
  btnForm.addEventListener("click", function(){
    crearEnlace(this.parentElement.previousSibling,this.parentElement);
  });
});
var contador=1;
function crearEnlace(texto1,mensaje1){
  var conten = document.createElement("div");
  var titulo = document.createElement("h5");
  var enlace = document.createElement("a");
  var nodeTitulo = document.createTextNode(inpForm.value);
  var nodeNuevo = document.createTextNode("Añadir una tarjeta");

  inpForm.value="";
  enlace.setAttribute("id","enlace");
  titulo.classList.add("estil-h5");
  conten.classList.add("tarjeta"); 
  conten.setAttribute("id", "tarjeta");

  titulo.appendChild(nodeTitulo);
  enlace.appendChild(nodeNuevo);
  conten.appendChild(titulo);
  conten.appendChild(enlace);
  
  mensaje.parentElement.insertBefore(conten,texto1);
  texto1.style.display = "inline-block"; // formulario mensaje
  this.parentElement.style.display="none";

  enlace.addEventListener("click",crearForm);
}

function crearForm() {
    var conte2=document.createElement("form");
    var textarea=document.createElement("textarea");
    var botonArea=document.createElement("button");
    var botonX=document.createElement("button");

    botonArea.classList.add("botonAr");
    botonArea.textContent="Guardar";
    botonArea.setAttribute("type","button");
    textarea.classList.add("textAre");
    botonX.classList.add("icon-cross");
    botonX.classList.add("cross");
    botonX.setAttribute("type","button");
    conte2.classList.add("tarjetaArea");

    this.parentElement.insertBefore(conte2,this);
    conte2.appendChild(textarea);
    conte2.appendChild(botonArea);
    conte2.appendChild(botonX);

    this.style.display="none";
}
    
function crearCarta(){
    var caja=this.parentElement;
    caja.style.display="none";

    var nombreCarta=document.createElement("div");
    caja.parentElement.appendChild(nombreCarta);
    nombreCarta.classList.add("nombreCarta");
    nombreCarta.setAttribute("id", "nombreCarta"+contador);
    nombreCarta.draggable=true;
    contador++;
    nombreCarta.textContent=textarea.value;
    caja.parentElement.insertBefore(nombreCarta,enlace);
    enlace.style.display="block";

   nombreCarta.addEventListener("dragstart",empiezaArrastrar);
   nombreCarta.addEventListener("dragend",terminaArrastrar);

    function empiezaArrastrar(e) {
        e.dataTransfer.setData("text",this.id);
        this.style.opacity = "0.4";
    }
    function terminaArrastrar(e) {
         this.style.opacity = null;
    }

}    
    
