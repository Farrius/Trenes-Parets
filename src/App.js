import React from "react";
import "./App.css";

//Importamos los jsx
import { HoraContainer } from "./components/hora_container/hora_container.component";
import { ElegirDestino } from "./components/elegir_destino/elegir_destino.component";

class App extends React.Component {
  constructor() {
    super();
    //Establecemos el state inicial
    this.state = {
      html: undefined,
      url: {
        path: "http://rodalies.gencat.cat/es/horaris"
      },
      //Paratmetros del fetch
      origen: "77005",
      desti: "77105"
    };
    //Hacemos la call con el bind para que no nos de error en el eventlistener
  }
  pedirHorariosAPI() {
    //LLamamos el method para conseguir los tiempos
    const tiempos = this.conseguirTiempo();
    //Hacemos un post request con fetch con la fecha actual i con origen Parets del Valles destino Hospitalet de llobregat
    fetch(this.state.url.path, {
      method: "POST",
      body: `origen=${this.state.origen}&desti=${this.state.desti}&dataViatge=${tiempos.dia}%2F${tiempos.mes}%2F${tiempos.year}&horaIni=${tiempos.hora}&lang=ca&cercaRodalies=true`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => response.text())
      .then(responseData => this.setState({ html: responseData }));
  }
  //Funcion para que nos de el tiempo actual que devulve un objeto con todos los datos de la hora
  conseguirTiempo() {
    const fecha = new Date();
    const objTiempos = {
      minutos: fecha.getMinutes(),
      hora: fecha.getHours(),
      dia: fecha.getDate(),
      mes: fecha.getMonth() + 1,
      year: fecha.getFullYear()
    };
    return objTiempos;
  }
  //Method para cambiar el state despues de un canvio en el select componnent
  seleccionarParada = e => {
    console.log(e.target.value);
    this.setState({ desti: e.target.value }, () => this.pedirHorariosAPI());
  };
  render() {
    return (
      <div className="container">
        <HoraContainer
          htmlResponse={this.state.html}
          conseguirTiempos={this.conseguirTiempo}
        />
        <ElegirDestino handleChange={this.seleccionarParada} />
      </div>
    );
  }
}

export default App;
