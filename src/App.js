import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina:''
  }

  paginaAnterior = () => {
    console.log('anterior...');
    
  }
  paginaSiguiente = () => {
   //leer el state de la pagina actual
    let pagina = this.state.pagina;
    
    //sumar 1 a la pagina actual
    pagina += 1;
    //agregar el cambio

    console.log(pagina);
    
    
  }

  consultarApi = () => {
    const termino =this.state.termino;
    const url = `https://pixabay.com/api/?key=15445030-0240a0631ee7a86760b0abfd5&q=${termino}&per_page=30`;
     //console.log(url);
    
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado=>this.setState({imagenes:resultado.hits}))

  }

  datosBusqueda = termino => {
    this.setState({
      termino: termino,
      pagina:1
    }, () => {
        this.consultarApi();
    })
  }

 

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>

        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes} 
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            
          />
       </div>

        
      </div>
    );
  }
}

export default App;
