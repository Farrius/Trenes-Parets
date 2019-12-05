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
        path: "http://rodalies.gencat.cat/es/horaris",
        origen: "77005",
        desti: "72305"
      },
      destino: ""
    };
  }
  componentDidMount() {
    //Establecemos la fecha actual i las variables para esta
    const fecha = new Date();
    const { hora, dia, mes, year } = {
      hora: fecha.getHours(),
      dia: fecha.getDay() + 1,
      mes: fecha.getMonth() + 1,
      year: fecha.getFullYear()
    };
    //Hacemos un post request con fetch con la fecha actual i con origen Parets del Valles destino Hospitalet de llobregat
    fetch(this.state.url.path, {
      method: "POST",
      body: `origen=${this.state.url.origen}&desti=${this.state.url.desti}&dataViatge=${dia}%2F${mes}%2F${year}&horaIni=${hora}&lang=es&cercaRodalies=true`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => response.text())
      .then(responseData => this.setState({ html: responseData }));
  }
  render() {
    return (
      <div className="container">
        <HoraContainer state={this.state} />
        <ElegirDestino />
      </div>
    );
  }
}

export default App;
