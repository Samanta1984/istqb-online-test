function mostrarRespuesta() {
    let nombre = document.getElementById("nombre1").value;
    let primerApellido = document.getElementById("apellido1").value;
    let segundoApellido = document.getElementById("apellido2").value;
    let mensaje = "Thank you " + nombre + " " + primerApellido + " " + segundoApellido + "for providing us with your information. We will redirect you to the exam shortly.";
    
    document.getElementById("respuesta1").textContent = mensaje;
    
}




function questionCorrect() {
    let respuesta = document.getElementById("respuestas").value;
    let mensaje = "";

    if (respuesta === "b") {
        mensaje = "The answer is correct, you get two points.";
    } else if (respuesta === "a") {
        mensaje = "The answer is correct, you get two points.";
    } else if (respuesta === "c") {
        mensaje = "The answer is incorrect, you get zero points.";
    } else if (respuesta === "d") {
        mensaje = "The answer is incorrect, you get zero points.";
    } else {
        mensaje = "If no answer is selected, you get zero points.";
    }

    document.getElementById("resultadoPregunta").textContent = mensaje;
}

