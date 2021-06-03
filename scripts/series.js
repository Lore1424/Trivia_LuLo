const preguntas = [
  {
    pregunta: "¿Quién mató a Sara?",
    respuestas: ["El hermano", "Un amigo", "Aún no se sabe"],
    correcta: 2
  },
  {
    pregunta:
      "¿Cuál es el verdadero nombre del profesor en la serie la casa de papel?",
    respuestas: ["Sergio Marquina", "Roberto Marquina", "Eduardo Marquina"],
    correcta: 0
  },
  {
    pregunta: "¿Cuantas temporadas tiene la serie Game of Thrones?",
    respuestas: ["20", "8", "4"],
    correcta: 1
  }
];
let preguntaActual = 0;
let puntos = 0;

function imprimir(pos) {
  let pregunta = preguntas[pos].pregunta;
  let respuestas = preguntas[pos].respuestas;
  preguntaActual = pos;

  let texto_respuesta = "";

  for (let i = 0; i < respuestas.length; i++) {
    texto_respuesta +=
      '<input type="radio" name="botonR" value="' +
      i +
      '"><label>' +
      respuestas[i] +
      "</label>";
  }
  document.getElementById("respuestaserie").innerHTML = texto_respuesta;
  document.getElementById("preguntaserie").innerHTML = pregunta;
}
imprimir(preguntaActual);

document
  .getElementById("continuarseries")
  .addEventListener("click", continuarP);

function continuarP() {
  let listaRespuestas = document.getElementsByName("botonR");
  let seleccionada;

  for (var r of listaRespuestas) {
    if (r.checked) {
      seleccionada = r.value;
      //localStorage.setItem("respuesta" + preguntaActual, seleccionada);
      break;
    }
  }
  if (seleccionada === undefined) {
    alert("Por favor, seleccionar una opción");
    return;
  }
  verificarRespuesta(seleccionada, preguntas[preguntaActual].correcta);
  if (preguntaActual >= 2) {
    window.location.href = "resultados.html";
  } else {
    imprimir(++preguntaActual);
  }
}
function verificarRespuesta(seleccionada, correcta) {
  if (parseInt(seleccionada, 0) === correcta) {
    puntos = puntos + 10;
  }
  localStorage.setItem("puntajeFinal", puntos);
}
