window.addEventListener("load",function(){
    var texto1 = document.getElementById('texto1');
    var mensaje = document.getElementById('mensaje');
    var btnForm = document.getElementById("btnForm");
    var inpForm = document.getElementById("inpForm");
    var contador=1;

    mensaje.style.display = "none";
    texto1.addEventListener("click",function(e){
        e.preventDefault();
        mensaje.style.display = "block";
        texto1.style.display = "none";
        mensaje.style.display="inline-block";
        inpForm.focus();
    });
    btnForm.addEventListener("click", crear);
    function crear(){
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
        
        texto1.parentNode.insertBefore(conten,texto1.previousSibling);
        texto1.style.display = "inline-block";
        mensaje.style.display = "none";

        enlace.addEventListener("click",function(){
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

            conten.appendChild(conte2);
            conte2.appendChild(textarea);
            conte2.appendChild(botonArea);
            conte2.appendChild(botonX);

            enlace.style.display="none";
            conten.addEventListener("dragenter", entraArrastrar);
            conten.addEventListener("dragover", arrastrarSobre);
            conten.addEventListener("drop", soltar);

            function entraArrastrar(e) {
                conten.classList.add("over");
            }

            function arrastrarSobre(e) {
                e.preventDefault();
            }

            function soltar(e) {
                var idArrastrado = e.dataTransfer.getData("text");
                var elementoArrastrado = document.getElementById(idArrastrado);
                var temporal = this.innerHTML;
                this.insertBefore(elementoArrastrado,this.childNodes[1]);
                this.classList.remove("over");
            }

            botonArea.addEventListener("click",function(){

                conte2.style.display="none";

                var nombreCarta=document.createElement("div");
                conten.appendChild(nombreCarta);

                nombreCarta.classList.add("nombreCarta");
                nombreCarta.setAttribute("id", "nombreCarta"+contador);
                nombreCarta.draggable=true;
                contador++;
                nombreCarta.textContent=textarea.value;
                conten.insertBefore(nombreCarta,enlace);
                enlace.style.display="block";

               nombreCarta.addEventListener("dragstart",empiezaArrastrar);
               nombreCarta.addEventListener("dragend",terminaArrastrar);

                function empiezaArrastrar(e) {
                    e.dataTransfer.setData("text",this.id);
                    this.classList.add("opacity");
                }
                function terminaArrastrar(e) {
                     this.style.opacity = null;
                     this.classList.remove("opacity");
                }

            });
        });
    }    
    
});