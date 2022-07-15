//Clase
class Automotor {
    constructor(clase, marca, version, modelo, valor) {
        this.clase = clase.toLowerCase();
        this.marca = marca;
        this.version = version;
        this.modelo = parseInt(modelo);
        this.valor = parseFloat(valor) * 1.03;
    }
}

//Algunos vehiculos definidos

let vehiculo1 = new Automotor("auto", "toyota", "corolla", 2017, 4500000);
let vehiculo2 = new Automotor("auto", "volkswagen", "gol", 2016, 1700000);
let vehiculo3 = new Automotor("camioneta", "toyota", "hilux", 2020, 6000000);
let vehiculo4 = new Automotor("camioneta", "fiat", "toro", 2021, 5800000);

//Array
const vehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];

const form = document.getElementById("idForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let clase = document.getElementById("idClase").value;
    let marca = document.getElementById("idMarca").value;
    let version = document.getElementById("idVersion").value;
    let modelo = document.getElementById("idModelo").value;
    let valor = document.getElementById("idValor").value;

    const vehiculo = new Automotor(clase, marca, version, modelo, valor)

    vehiculos.push(vehiculo)

    console.log(vehiculos)

    form.reset()
})

const botonMostrar = document.getElementById("mostrar")
const listaVehiculos = document.getElementById("cardsVehiculos")

botonMostrar.addEventListener("click", () => {
    for (let vehiculo of vehiculos) {
        listaVehiculos.innerHTML += `
        <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">${vehiculo.marca} ${ vehiculo.version}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${vehiculo.modelo}</h6>
            <p class="card-text">$${vehiculo.valor}</p>
        </div>
    </div>
`}})