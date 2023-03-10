//ARRAYS DE OBJETOS CON TODOS LOS AUTOS EN PROMOCIÓN
const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul'}
    ];


window.onload = function(){
//  //1.COLOCÁ ACÁ EL CÓDIGO PARA SETEAR TODOS LOS AUTOS EN PROMOCIÓN
// //2.CREA UNA FUNCIÓN ACÁ PARA FILTRAR LOS AUTOS POR MARCA

function mostrarAutos() {
  const cards = document.querySelector("#cards");
  autos.forEach(elemento => {cards.innerHTML += 
    `<div class="col-sm-4 mt-3">
      <div class="card px-2 pb-2">
        <div class=card-body">
          <h5 class="cad-tittle">${elemento.marca}</h5>
          <p class="card-text"> ${elemento.modelo} - Color ${elemento.color}</p>
          <p class="h6">Precio: ${elemento.precio}</p>
          <a href="#" class="btn btn-warning">Más info +</a>
        </div>
      </div>
    </div>`});
}
mostrarAutos();

// Ejercicio 3)
let formulario = document.querySelector("form");

const filtrar = evento => {

  evento.preventDefault();
  let filtro = document.querySelector("#filtro").value;
  let autosFiltro = autos.filter(auto => auto.marca.toLocaleLowerCase() === filtro.toLocaleLowerCase()); 
  
  cards.innerHTML = "";
  autosFiltro.forEach(elemento => {
    cards.innerHTML += 
    `<div class="col-sm-4 mt-3">
      <div class="card">
        <div class=card-body">
          <h5 class="cad-tittle">${elemento.marca}</h5>
          <p class="card-text"> ${elemento.modelo} - Color ${elemento.color}</p>
          <p class="h6">Precio: ${elemento.precio}</p>
          <a href="#" class="btn btn-warning">Más info +</a>
        </div>
      </div>
    </div>`});

    formulario.reset();
}
formulario.addEventListener("submit", filtrar);

}