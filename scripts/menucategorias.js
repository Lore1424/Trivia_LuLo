function mostrarnombre() {
  document.getElementById("bienvenida").innerHTML = localStorage.getItem(
    "nombreUsuario"
  );
}

mostrarnombre();
