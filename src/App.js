import React from "react";
import "./App.css";

import { HoraHospiContainer } from "./components/hora_hospitalet_container/hora_hospitalet_container.component";
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
      }
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
    return <HoraHospiContainer state={this.state} />;
  }
}

export default App;
