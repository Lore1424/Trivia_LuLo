function mostrarResultado() {
  document.getElementById("resultados").innerHTML = localStorage.getItem(
    "puntajeFinal"
  );
}

mostrarResultado();

document.getElementById("irSeries").addEventListener("click", series);

function series() {
  window.location.href = "series.html";
}

document.getElementById("irPelis").addEventListener("click", pelis);

function pelis() {
  window.location.href = "peliculas.html";
}
