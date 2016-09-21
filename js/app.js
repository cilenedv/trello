window.addEventListener("load", function() {
 	document.getElementById("boton").style.display="none";
 	document.getElementById("icon").style.display="none";
 	var entrada=document.getElementById("texto");
 	entrada.addEventListener("click",function(){
 		document.getElementById("boton").style.display="block";
 		document.getElementById("icon").style.display="block";
 		document.getElementById("caja").classList.add("fondo-form");
 	});
});