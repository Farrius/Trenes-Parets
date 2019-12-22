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
      desti: "78802",
      //El destino que hace display
      destino: ""
    };
    //Hacemos la call con el bind para que no nos de error en el eventlistener
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    //Establecemos la fecha actual i las variables para esta
    const fecha = new Date();
    const { hora, dia, mes, year } = {
      hora: fecha.getHours(),
      dia: fecha.getDate(),
      mes: fecha.getMonth() + 1,
      year: fecha.getFullYear()
    };
    //Hacemos un post request con fetch con la fecha actual i con origen Parets del Valles destino Hospitalet de llobregat
    fetch(this.state.url.path, {
      method: "POST",
      body: `origen=${this.state.origen}&desti=${this.state.desti}&dataViatge=${dia}%2F${mes}%2F${year}&horaIni=${hora}&lang=ca&cercaRodalies=true`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => response.text())
      .then(responseData => this.setState({ html: responseData }));
  }
  //Method para cambiar el state despues de un canvio
  handleChange(event) {
    this.setState({ desti: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <HoraContainer htmlResponse={this.state.html} />
      </div>
    );
  }
}

export default App;
