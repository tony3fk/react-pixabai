import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = e => {
    e.preventDefault();
    //tomamos el valor de input
    const termino = this.busquedaRef.current.value;
    //console.log(this.busquedaRef.current.value);

    //Lo enviamos al componente principal
    this.props.datosBusqueda(termino);
  };
  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-10">
            <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Search your image: e.g: Soccer" ></input>
          </div>
          <div className="form-group col-md-2">
            <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search" ></input>
          </div>
        </div>
      </form>
    );
  }
}
export default Buscador;
