import Producto from "./Producto.js";

export default class Lista{
  constructor(){
    this._raiz = null;
  }
  get raiz(){
    return this._raiz;
  }
  set raiz(val){
    this._raiz = val;
    return this._raiz;
}

  agregar(codigo, hIzquierda, hDerecha){
    var producto = new Producto(codigo, hIzquierda, hDerecha);

    if(this._raiz === null){
      this._raiz = producto;
    }else{
      if (producto._codigo < this._raiz) {
        producto.hIzquierda = producto;
      }else {
        producto.hDerecha = producto;
      }
    }
    console.log(this._raiz);
    console.log(producto)
  }

  buscar(iBusqueda){
    if (iBusqueda == this._raiz) {
      console.log(this._raiz);
    }else  {
      if (iBusqueda == producto.hIzquierda) {
        console.log(producto.hIzquierda);
      }else if (iBusqueda == producto.hDerecha) {
        console.log(producto.hDerecha);
      }
    }
  }


  inOrder(){
    if (producto.hIzquierda) {
      this.inOrder(producto.hIzquierda);
    }
    console.log(producto.codigo);
    if (producto.hDerecha) {
      this.inOrder(producto.hDerecha);
    }
  }

  preOrder(){
		console.log(producto.codigo);
		if (producto.hIzquierda) {
			this.preOrder(producto.hIzquierda);
		}
		if (producto.hDerecha) {
			this.preOrder(producto.hDerecha);
		}
	}


	postOrder(){
		if (producto.hIzquierda) {
			this.postOrder(producto.hIzquierda);
		}
		if (producto.hDerecha) {
			this.postOrder(producto.hDerecha);
		}
		console.log(producto.codigo);
	}
}
