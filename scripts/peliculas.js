const preguntas = [
  {
    pregunta: "¿Cuál es la película más taquillera de la historia?",
    respuestas: ["Titanic", "Avengers: Endgame", "50 sombras de grey"],
    correcta: 1
  },
  {
    pregunta: "¿Cuales son los personajes principales de la pelicula Titanic?",
    respuestas: [
      "Jack Nicholson y Rose Vendete",
      "Jack Dawson y Rose Dewitt Bukater",
      "Rose Dewitt y Michael Jackson"
    ],
    correcta: 1
  },
  {
    pregunta: "¿Quién dirigió la trilogía original de la saga de Star Wars?",
    respuestas: ["George Lucas", "Stephen King", "Leonardo Davinci"],
    correcta: 0
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
  document.getElementById("respuestas").innerHTML = texto_respuesta;
  document.getElementById("questions").innerHTML = pregunta;
}
imprimir(preguntaActual);

document.getElementById("continuarPelis").addEventListener("click", continuarP);

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
