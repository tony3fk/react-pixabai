import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";
import Footer from "./componentes/Footer";

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  };

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  };

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    //si la página es 1 ya no restar
    if (pagina === 1) return null;

    //restar 1 a la pagina actual
    pagina -= 1;
    //agregar el cambio
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    //console.log(pagina);

  };
  paginaSiguiente = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    //sumar 1 a la pagina actual
    pagina += 1;
    //agregar el cambio
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    //console.log(pagina);


  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=15445030-0240a0631ee7a86760b0abfd5&q=${termino}&per_page=30&page=${pagina}`;

    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));



  };

  datosBusqueda = termino => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    });
  };



  render() {
    return (
      <div className="container mt-5">
        <div className="jumbotron">
          <div className="center-block mb-5">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1024px-Google_Images_2015_logo.svg.png" alt="logo" width='500rem' />
          </div>
          <Buscador datosBusqueda={this.datosBusqueda} />
          <p className="lead text-center">Powered by Pixabay</p>
        </div>

        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}

          />
        </div>
        <div className=" row justify-content-center navbar navbar-fixed-bottom mt-5 pt-5">
          <Footer />
        </div>


      </div>
    );
  }
}

export default App;
