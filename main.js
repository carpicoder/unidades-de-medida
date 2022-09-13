let botones = document.querySelectorAll("main > div");

botones.forEach(
    boton => boton.addEventListener("click", agregarActive)
)

function agregarActive() {
    botones.forEach(
        boton => boton.classList.remove("active")
    );
    this.classList.add("active");
}