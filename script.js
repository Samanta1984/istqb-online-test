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
function correct() {
    let respuestaSeleccionada = document.getElementById("respuestas1").value;
    let mensaje = "";

    if (respuestaSeleccionada === "b") {
        mensaje = "The question is correct";
    }
    else if (respuestaSeleccionada === "a") {
        mensaje = "The question is incorrect";
    }
    else if (respuestaSeleccionada === "c") {
        mensaje = "The question is incorrect";
    }
    else {
        mensaje = "The question is incorrect";
    }

    document.getElementById("resultadoCorrect1").innerText = mensaje;

}

//Tercera 

function question() {
    let respuesta = "B";
    let respuesta1 = "A"
    let mensaje = " The correct answer is " + respuesta + respuesta1;

    document.getElementById("answerresult").textContent = mensaje;
}