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
      desti: "72305",
      //El destino que hace display
      destino: ""
    };
    this.handleChange = this.handleChange.bind(this);
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
      body: `origen=${this.state.origen}&desti=${this.state.desti}&dataViatge=${dia}%2F${mes}%2F${year}&horaIni=${hora}&lang=es&cercaRodalies=true`,
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
  }
  render() {
    return (
      <div className="container">
        <HoraContainer state={this.state} />
        <form>
          <div>
            <label htmlFor="destino">Destino</label>
            <select id="destino" name="desti" onChange={this.handleChange}>
              <option value="">Seleccioneu una estació</option>
              <option value="77106">Balenyà-Els Hostalets</option>
              <option value="77107">Balenyà-Tona-Seva</option>
              <option value="78804">Barcelona-Arc de Triomf</option>
              <option value="78806">Barcelona-La Sagrera-Meridiana</option>
              <option value="78805">Barcelona-Plaça de Catalunya</option>
              <option value="78802">Barcelona-Sant Andreu Arenal</option>
              <option value="71801">Barcelona-Sants</option>
              <option value="78801">Barcelona-Torre del Baró</option>
              <option value="77112">Borgonyà</option>
              <option value="77301">Campdevànol</option>
              <option value="77105">Centelles</option>
              <option value="77103">Figaró-St.Martí de Centelles</option>
              <option value="77006">Granollers-Canovelles</option>
              <option value="72305">L'Hospitalet de Llobregat</option>
              <option value="77114">La Farga de Bebié</option>
              <option value="77102">La Garriga</option>
              <option value="77310">La Tor de Querol-Enveig</option>
              <option value="77100">Les Franqueses del Vallès</option>
              <option value="77110">Manlleu</option>
              <option value="77004">Mollet-Santa Rosa</option>
              <option value="78800">Montcada Bifurcació</option>
              <option value="77002">Montcada Ripollet</option>
              <option value="77304">Planoles</option>
              <option value="77309">Puigcerdà</option>
              <option value="77303">Ribes de Freser</option>
              <option value="77200">Ripoll</option>
              <option value="77104">Sant Martí de Centelles</option>
              <option value="77113">Sant Quirze de Besora</option>
              <option value="77003">Santa Perpètua de Mogoda</option>
              <option value="77111">Torelló</option>
              <option value="77305">Toses</option>
              <option value="77307">Urtx-Alp</option>
              <option value="77109">Vic</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
