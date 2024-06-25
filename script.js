let respuestaCorrecta = ["b", "a", "c", "a", "c", "c", "a", "b", "c", "a"];
let estudiantes = [];

// Primera : Welcome Student
function mostrarBienvenida() {
    let nombre = document.getElementById("nombre1").value;
    let mensaje = "Welcome " + nombre;
    document.getElementById("respuestaBienvenida").innerText = mensaje;

    // Añadir el estudiante a la lista si no existe ya
    let estudianteExistente = estudiantes.find(estudiante => estudiante.nombre === nombre);
    if (!estudianteExistente) {
        estudiantes.push({ nombre: nombre, puntos: 0 });
    }
}

// Segunda: See Answer
function verRespuesta(numeroPregunta) {
    let respuesta = respuestaCorrecta[numeroPregunta];
    let mensaje = "The correct answer is " + respuesta.toUpperCase();
    document.getElementById("resultadoVerRespuesta" + numeroPregunta).innerText = mensaje;
}

// Tercera: Correct Question
function corregir(numeroPregunta) {
    let respuestaSeleccionada = document.getElementById("respuesta" + numeroPregunta).value;
    let mensaje = "";
    let puntuacion = 0;
    let respuesta = "";

    if (respuestaSeleccionada === respuestaCorrecta[numeroPregunta]) {
        puntuacion = 2;
        respuesta = "correct";
    } else if (respuestaSeleccionada === "") {
        puntuacion = 0;
        respuesta = "incorrect";
    } else {
        puntuacion = -1;
        respuesta = "incorrect";
    }
    mensaje = "The question is " + respuesta + " you receive " + puntuacion;
    document.getElementById("resultadoCorregir" + numeroPregunta).innerText = mensaje;

    // Actualizar la puntuación del estudiante
    let nombre = document.getElementById("nombre1").value;
    let estudiante = estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
        estudiante.puntos += puntuacion;
    }
}

// Cuarto: Finish test
function resultadoRespuesta() {
    let resultadoPuntos = 0;

    for (let i = 0; i < respuestaCorrecta.length; i++) {
        let respuestaSeleccionada = document.getElementById("respuesta" + i).value;

        if (respuestaSeleccionada === respuestaCorrecta[i]) {
            resultadoPuntos += 2;
        } else if (respuestaSeleccionada === "") {
            resultadoPuntos += 0;
        } else {
            resultadoPuntos -= 1;
        }
    }

    // Actualizar la puntuación total del estudiante
    let nombre = document.getElementById("nombre1").value;
    let estudiante = estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
        estudiante.puntos = resultadoPuntos;
    }

    document.getElementById("resultadoPuntos").innerText = "Total: " + resultadoPuntos + " points.";
}

// Quinto: Ranking
let nombres = [];
let notas = [];
let ranking = [];

for (let i = 0; i < nombres.length; i++) {
    ranking.push({ nombre: nombres[i], nota: notas[i] });
}

for (let i = 0; i < ranking.length; i++) {
    estudiantes.push({ nombre: ranking[i].nombre, puntos: ranking[i].nota });
}

function mostrarRanking() {
    estudiantes.sort(function (a, b) {
        return b.puntos - a.puntos;
    });
    let rankingTexto = "";
    for (let i = 0; i < estudiantes.length; i++) {
        rankingTexto += (i + 1) + " " + estudiantes[i]["nombre"] + "  " + estudiantes[i]["puntos"] + " puntos\n";
    }
    document.getElementById("resultadoFinal").innerText = rankingTexto;
}

function limpiarRespuestas() {
    for (let i = 0; i < respuestaCorrecta.length; i++) {
        document.getElementById("respuesta" + i).value = "";
        document.getElementById("resultadoCorregir" + i).innerText = "";
        document.getElementById("resultadoVerRespuesta" + i).innerText = "";
    }
    document.getElementById("resultadoPuntos").innerText = "";
}

function resultadoRanking() {
    mostrarRanking();
    limpiarRespuestas();
}