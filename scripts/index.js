document.getElementById("button").addEventListener("click", guardarnombre);

function guardarnombre() {
  let nameUser = document.getElementById("name").value;
  localStorage.setItem("nombreUsuario", nameUser);
  if (nameUser === "") {
    alert("Por favor, ingrese su nombre");
  } else {
    window.location.href = "menucategorias.html";
  }
}
