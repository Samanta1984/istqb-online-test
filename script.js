function mostrarRespuesta() {
    let nombre = document.getElementById("nombre1").value;
    let primerApellido = document.getElementById("apellido1").value;
    let segundoApellido = document.getElementById("apellido2").value;
    let mensaje = "Gracias " + nombre + " " + primerApellido + " " + segundoApellido + " por facilitarnos sus datos. En breve le redirigiremos al examen.";
    
    document.getElementById("respuesta1").textContent = mensaje;//sacado de chatgpt ya que no me imprimia el mensaje//
    
}



