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
      <div className="app_container">
        <div className="header_container">Trens Parets del Vallès</div>
        <HoraContainer
          htmlResponse={this.state.html}
          conseguirTiempos={this.conseguirTiempo}
        />
        <div className="destino_salida_conatiner">
          <span className="origen_container">Origen => Parets del Vallès</span>
          <ElegirDestino handleChange={this.seleccionarParada} />
        </div>
        <div className="logo_parets_container">
          <img
            src="data:image/png;base64,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"
            alt="logo parets del valles"
            id="logo_parets"
          ></img>
        </div>
      </div>
    );
  }
}

export default App;
