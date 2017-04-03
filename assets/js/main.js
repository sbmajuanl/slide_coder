window.addEventListener('load',function() {
  var coder=[];// Guarda los datos del formulario
  boton.addEventListener('click',function(evento) {// Evento del boton al hacerle click
    evento.preventDefault();

    var nombre=document.getElementById("autor").value;
    var area=document.getElementById("area").value;

    function enviardatos(nombre,area){
      this.nombre=nombre;
      this.apellido=area;

      this.formulario=function(){
        var div=document.createElement("div");
        div.classList.add("div-contenedor");
        var p =document.createElement("p")
        p.innerHTML+="Nombre:"+this.nombre+"<br>"+
        "Apellido:"+this.apellido+"</br>"+
        "Edad :"+this.edad+"</br>"+
        "Genero :"+this.genero+"</br>"+
        "Ciudad :"+this.ciudad+"</br>"+
        "Pais :"+this.pais;
        div.appendChild(p);
        return div;
      };
    }
    if(nombre.length !==0 && apellido.length !==0 && edad.length !==0 && ciudad.length !=0 && pais.length !==0){
      //var enviardatos=new enviardatos(nombre,apellido,edad,pais);
      //console.log(new enviardatos(nombre,apellido,edad,genero,ciudad,pais));
      localStorage.setItem("nuevoPaciente",JSON.stringify(new enviardatos(nombre,apellido,edad,genero,ciudad,pais)));
      //listado.push(enviardatos);
      //enviar.appendChild(enviardatos.formulario());
      document.getElementById("foormulario").reset();
      window.location="Paciente.html";
    }
    else{
      var indicacion=document.getElementsByClassName("indicacion_sl");
      for(var i = 0 ; i<indicacion.length;i++){
        indicacion[i].innerText="Este campo es obligatorios"
      }
    }
  });
});
