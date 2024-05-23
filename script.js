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

function puntuacion() {
    let nombre = document.getElementById("respuestas1").value;
    let mensaje = "";

    if (nombre === "b") {
        mensaje = "two points";
    }
    else if (nombre === "a") {
        mensaje = "zero points";
    }
    else if (nombre === "c") {
        mensaje = "zero points";
    }
    else {
        mensaje = "The question is incorrect";
    }

    document.getElementById("puntuacionRespuesta").innerText = mensaje;

}