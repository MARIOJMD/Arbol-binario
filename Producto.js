export default class Articulo{
    constructor(codigo, hIzquierda, hDerecha){
        this._codigo = codigo;
        this._hIzquierda = null;
        this._hDerecha = null;
    }
    get codigo(){
        return this._codigo;
    }
    set codigo(val){
      this._codigo = val;
      return this._codigo;
    }
    get hIzquierda(){
      return this._hIzquierda;
    }
    set hIzquierda(val){
      this._hIzquierda = val;
      return this._hIzquierda;
    }
    get hDerecha(){
      return this._hDerecha;
    }
    set hDerecha(val){
      this._hDerecha = val;
      return this._hDerecha;
    }
}
