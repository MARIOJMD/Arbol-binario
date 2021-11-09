Utilizando la misma clase base para manejar un inventario, se controlarán productos, almacenándolos en un BST (ABB) "Binary Search Tree", pero solo se implementarán las siguientes funciones.
Agregar (nuevo producto)
Buscar(código) regresar producto
--- y regresar el contenido del árbol mediante los recorridos
InOrder()
PreOrder()
PostOrder()

El código del producto se utilizará como criterio de comparación.


/*if(this._raiz === null){
  console.log("Entra al primer if");
  this._raiz = producto._codigo;
  //producto._codigo = producto._codigo;
}else if (this._raiz !== null && this._raiz > producto._codigo) {
  console.log("Entra al else if");
  producto._hIzquierda = producto._codigo;
}else{
  console.log("Entra al else");
  producto._hDerecha = producto._codigo;
}
console.log(this._raiz);
console.log(producto)
}*/
