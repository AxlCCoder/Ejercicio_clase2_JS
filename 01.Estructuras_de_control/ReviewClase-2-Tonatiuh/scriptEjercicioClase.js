function RegistroMascota () {
let nombreDeMascota = prompt("Cual es el nombre de tu mascota?");
let edadDeMascota = parseInt(prompt("Cual es la edad de tu mascota?"));
let razaDeMascota = prompt("Cual es la raza de tu mascota?");

let estaVacunado = prompt("Tiene todas sus vacunas? (Si/No)");
let esVacunado = estaVacunado.toLowerCase() === "si";

if (!esVacunado) {
    alert("Resgistro cancelado. La mascota debe estar vacunada");
    return
}

let mensajeMascota = `El nombre de tu mascota es: ${nombreDeMascota}, su edad es de ${edadDeMascota} años, su raza es ${razaDeMascota} y su mascota esta vacunada`
alert(mensajeMascota);
console.log("Mascota registrada exitosamente")
}
RegistroMascota()