function mostrarRespuesta() {
    let nombre = document.getElementById("nombre1").value;
    let mensaje = " Welcome " + nombre ;
    document.getElementById("respuesta1").textContent = mensaje;
    
}




function questionCorrect() {
    let respuesta = "B";
    let mensaje = " The correct answer is " + respuesta;

    document.getElementById("resultadoPregunta").textContent = mensaje;
}

