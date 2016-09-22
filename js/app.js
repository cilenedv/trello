window.addEventListener("load", function() {
 	document.getElementById("boton").style.display="none";
 	document.getElementById("icon").style.display="none";
 	var caja = document.getElementById("caja");
 	var entrada=document.getElementById("texto");
 	document.getElementById("boton");
 	document.getElementById("icon");
 	document.getElementById("nombre");
 	entrada.addEventListener("click",function(){
 		texto.style.display="none";
 		agregar();
 		boton.style.display="block";
 		icon.style.display="block";
 		document.getElementById("caja").classList.add("fondo-form");

 	});
 	function agregar() {
        var mensaje = document.createElement("input");
        mensaje.setAttribute("id","nombre");
       	mensaje.placeholder = "Añadir una lista...";
       	mensaje.classList.add("texto2");
        caja.insertBefore(mensaje, caja.childNodes[0]);
    }
    boton.addEventListener("click",imprimir);
    function imprimir(){
    	boton.style.display="none";
    	icon.style.display="none";
    	nombre.style.display="none";
    	valor = document.getElementById("nombre").value;
    	var contenedor=document.createElement("div");
		contenedor.innerHTML = valor;
		caja.insertBefore(contenedor,caja.childNodes[0]);
		var crear=document.createElement("a");
		caja.insertBefore(crear, caja.childNodes[1]);
		var t = document.createTextNode("Añadir una tarjeta"); 
		crear.appendChild(t);
		crear.classList.add("link")


    }

});

