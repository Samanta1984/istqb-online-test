// Primera : Welcome Student

function mostrarBienvenida() {
    let nombre = document.getElementById("nombre1").value;
    let mensaje = " Welcome " + nombre ;
    document.getElementById("respuesta1").textContent = mensaje;
    
}


// Segunda: See Answer

function questionCorrect() {
    let respuesta = "B";
    let mensaje = " The correct answer is " + respuesta;

    document.getElementById("resultadoQuestionCorrect1").textContent = mensaje;
}
// Tercera: Correct Question
function corregir() {
    let respuestaSeleccionada = document.getElementById("respuestas1").value;
    let mensaje = "";
    let puntuacion = 0;
    let respuesta = "";

    if (respuestaSeleccionada === "b") {
        puntuacion = 2;
        respuesta = "correct";
    }
    else if (respuestaSeleccionada === "a") {
        puntuacion = 0;
        respuesta = "icorrect";
    }
    else if (respuestaSeleccionada === "c") {
        puntuacion = 0;
        respuesta = "incorrect";
    }
    else {
        puntuacion = -1;
        respuesta = "incorrect";
        
    }

    mensaje = " The question is " + respuesta + " you recive " + puntuacion;

    document.getElementById("resultadoCorrect1").innerText = mensaje;

}

//Tercera 

function question() {
    let respuesta = "B";
    let respuesta1 = "A"
    let mensaje = " The correct answer is " + respuesta + respuesta1;

    document.getElementById("answerresult").textContent = mensaje;
}