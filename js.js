var btn= document.getElementById("submit")
var wa = document.getElementById("btn-whatsapp")

wa.onclick=function(){
    window.open('https://wa.me/3117653826?text=Hola!%20Estoy%20interesado%20en%20tu%20servicio')
}

btn.onclick = function(){alert("Se ha enviado satisfactoriamente su solicitud, nos contactaremos lo más pronto posible")}

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
}
const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
}
const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    temaOscuro() : temaClaro();
}