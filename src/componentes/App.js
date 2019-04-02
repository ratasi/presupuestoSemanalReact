import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';

class App extends Component {
  state = {
    presupuesto : '',
    restante : '',
    gastos: {}
  }

  //Agregar un nuevo gasto al state
  agregarGasto = gasto => {

  //Coger una copia del state actual
    const gastos = {...this.state.gastos};
    
    console.log('Se ha agregado el gasto' + gasto);
    console.log(gastos);

  //Agregar el gasto al objeto del state
    // this.props.agregarGasto(gasto);

  //Ponerlo en el state
  }

  render() {
    return (
      <div className="App container">
        <Header 
          titulo = 'Gasto Semanal'
        />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
            <Formulario 
              agregarGasto = {this.agregarGasto}
            />
            </div>
            <div className="one-half column">
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
