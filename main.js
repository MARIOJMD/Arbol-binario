import Lista from "./Lista.js";
let lista = new Lista();
import Producto from "./Producto.js";

let btn = document.querySelector("#btn");
btn.addEventListener("click", valores);

let btnBusqueda = document.querySelector("#btnBusqueda");
btnBusqueda.addEventListener("click", buscar);

function buscar(){
  let iBusqueda = document.querySelector("#buscar");
  lista.buscar(iBusqueda);
}

function valores(){
  var codigo = document.querySelector("#codigo").value;

  agregar(codigo);
  //imprimir(codigo);
}

function agregar(codigo, hIzquierda, hDerecha){
//let lista = new Lista();
  let objProducto = {
    codigo: codigo,
    hIzquierda: hIzquierda,
    hDerecha: hDerecha
  }

  lista.agregar(objProducto);
}



//let lista = new Lista();
//lista.addProducto(objProducto);
//imprimir(codigo);
