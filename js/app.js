window.addEventListener("load",function(){
    var texto1 = document.getElementById('texto1');
    var mensaje = document.getElementById('mensaje');
    mensaje.style.display = "none";
    var btnForm = document.getElementById("btnForm");
    var inpForm = document.getElementById("inpForm");
    texto1.addEventListener("click",function(e){
		e.preventDefault();
        mensaje.style.display = "block";
        texto1.style.display = "none";
        mensaje.style.display="inline-block";
	});
    btnForm.addEventListener("click", crear);
    function crear(){
        var conten = document.createElement("div");
        var titulo = document.createElement("h5");
        var enlace = document.createElement("a");
        enlace.setAttribute("id","enlace");
        var nodeTitulo = document.createTextNode(inpForm.value);
        var nodeNuevo = document.createTextNode("Añadir una tarjeta");
        titulo.appendChild(nodeTitulo);
        enlace.appendChild(nodeNuevo);
        conten.appendChild(titulo);
        conten.appendChild(enlace);
        conten.classList.add("tarjeta"); texto1.parentNode.insertBefore(conten,texto1.previousSibling);
        conten.style.cssFloat = "left";
        texto1.style.display = "inline-block";
        mensaje.style.display = "none";
    }    
});