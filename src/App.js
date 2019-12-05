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
    return (
      <div className="container">
        <HoraHospiContainer state={this.state} />
        <div class="ui-widget">
          <label for="origen" class="control-label">
            Origen
          </label>
          <select id="origen" name="origen" class="form-control">
            <option value="">Seleccioneu una estació</option>
            <option value="72400">Aeroport</option>
            <option value="78505">Aguilar de Segarra</option>
            <option value="73101">Alcover</option>
            <option value="71502">Altafulla-Tamarit</option>
            <option value="78407">Anglesola</option>
            <option value="79600">Arenys de Mar</option>
            <option value="71211">Ascó</option>
            <option value="79404">Badalona</option>
            <option value="77106">Balenyà-Els Hostalets</option>
            <option value="77107">Balenyà-Tona-Seva</option>
            <option value="78705">Barberà del Vallès</option>
            <option value="78804">Barcelona-Arc de Triomf</option>
            <option value="79009">Barcelona-El Clot-Aragó</option>
            <option value="79400">Barcelona-Estació de França</option>
            <option value="78806">Barcelona-La Sagrera-Meridiana</option>
            <option value="71802">Barcelona-Passeig de Gràcia</option>
            <option value="78805">Barcelona-Plaça de Catalunya</option>
            <option value="78802">Barcelona-Sant Andreu Arenal</option>
            <option value="79004">Barcelona-Sant Andreu Comtal</option>
            <option value="71801">Barcelona-Sants</option>
            <option value="78801">Barcelona-Torre del Baró</option>
            <option value="78402">Bell-lloc d'Urgell</option>
            <option value="78406">Bellpuig</option>
            <option value="71708">Bellvitge</option>
            <option value="79606">Blanes</option>
            <option value="79302">Bordils-Juià</option>
            <option value="77112">Borgonyà</option>
            <option value="79412">Cabrera de Mar-Vilassar de Mar</option>
            <option value="78503">Calaf</option>
            <option value="71601">Calafell</option>
            <option value="79502">Caldes d'Estrac</option>
            <option value="79203">Caldes de Malavella</option>
            <option value="79603">Calella</option>
            <option value="79305">Camallera</option>
            <option value="65403">Camarles-Deltebre</option>
            <option value="65409">Cambrils</option>
            <option value="65401">Camp-redó</option>
            <option value="77301">Campdevànol</option>
            <option value="79601">Canet de Mar</option>
            <option value="71302">Capçanes</option>
            <option value="79101">Cardedeu</option>
            <option value="78605">
              Castellbell i el Vilar-Monistrol de Mont
            </option>
            <option value="72210">Castellbisbal</option>
            <option value="71705">Castelldefels</option>
            <option value="78405">Castellnou de Seana</option>
            <option value="79301">Celrà</option>
            <option value="77105">Centelles</option>
            <option value="79316">Cerbère</option>
            <option value="78706">Cerdanyola del Vallès</option>
            <option value="72503">Cerdanyola-Universitat</option>
            <option value="78500">Cervera</option>
            <option value="79314">Colera</option>
            <option value="72303">Cornellà</option>
            <option value="71604">Cubelles</option>
            <option value="71603">Cunit</option>
            <option value="71305">Duesaigües-L'Argentera</option>
            <option value="79407">El Masnou</option>
            <option value="72211">El Papiol</option>
            <option value="71707">El Prat de Llobregat</option>
            <option value="72201">El Vendrell</option>
            <option value="71301">Els Guiamets</option>
            <option value="72203">Els Monjos</option>
            <option value="77103">Figaró</option>
            <option value="79309">Figueres</option>
            <option value="79303">Flaçà</option>
            <option value="71210">Flix</option>
            <option value="79205">Fornells de la Selva</option>
            <option value="71703">Garraf</option>
            <option value="71706">Gavà</option>
            <option value="72208">Gelida</option>
            <option value="79300">Girona</option>
            <option value="78404">Golmés</option>
            <option value="79100">Granollers Centre</option>
            <option value="77006">Granollers-Canovelles</option>
            <option value="79105">Gualba</option>
            <option value="79107">Hostalric</option>
            <option value="73002">Juneda</option>
            <option value="65402">L'Aldea-Amposta</option>
            <option value="65405">L'Ametlla de Mar</option>
            <option value="65404">L'Ampolla-Perelló-Deltebre</option>
            <option value="72202">L'Arboç</option>
            <option value="73007">L'Espluga de Francolí</option>
            <option value="72305">L'Hospitalet de Llobregat</option>
            <option value="65407">L'Hospitalet de l'Infant</option>
            <option value="77114">La Farga de Bebié</option>
            <option value="73004">La Floresta</option>
            <option value="77102">La Garriga</option>
            <option value="72205">La Granada</option>
            <option value="79011">La Llagosta</option>
            <option value="77306">La Molina</option>
            <option value="73100">La Plana-Picamoixons</option>
            <option value="73010">La Riba</option>
            <option value="73102">La Selva del Camp</option>
            <option value="77310">La Tor de Querol-Enveig</option>
            <option value="72206">Lavern-Subirats</option>
            <option value="73003">Les Borges Blanques</option>
            <option value="71307">Les Borges del Camp</option>
            <option value="77100">Les Franqueses del Vallès</option>
            <option value="79109">Les Franqueses-Granollers Nord</option>
            <option value="79312">Llançà</option>
            <option value="78400">Lleida-Pirineus</option>
            <option value="79102">Llinars del Vallès</option>
            <option value="79605">Malgrat de Mar</option>
            <option value="77110">Manlleu</option>
            <option value="78600">Manresa</option>
            <option value="72209">Martorell</option>
            <option value="71303">Marçà-Falset</option>
            <option value="79500">Mataró</option>
            <option value="79200">Maçanet-Massanes</option>
            <option value="72300">Molins de Rei</option>
            <option value="78403">Mollerussa</option>
            <option value="79006">Mollet-Sant Fost</option>
            <option value="77004">Mollet-Santa Rosa</option>
            <option value="65408">Mont-roig del Camp</option>
            <option value="73008">Montblanc</option>
            <option value="78800">Montcada Bifurcació</option>
            <option value="77002">Montcada Ripollet</option>
            <option value="79005">Montcada i Reixac</option>
            <option value="78708">Montcada i Reixac-Manresa</option>
            <option value="78707">Montcada i Reixac-Santa Maria</option>
            <option value="79405">Montgat</option>
            <option value="79406">Montgat Nord</option>
            <option value="79007">Montmeló</option>
            <option value="71300">Móra la Nova</option>
            <option value="76003">Nulles-Bràfim</option>
            <option value="79408">Ocata</option>
            <option value="79103">Palautordera</option>
            <option value="77005">Parets del Vallès</option>
            <option value="79604">Pineda de Mar</option>
            <option value="77304">Planoles</option>
            <option value="71704">Platja de Castelldefels</option>
            <option value="65411">Port Aventura</option>
            <option value="79315">Portbou</option>
            <option value="71304">Pradell</option>
            <option value="79409">Premià de Mar</option>
            <option value="77309">Puigcerdà</option>
            <option value="73001">Puigverd de Lleida-Artesa de Lleida</option>
            <option value="78506">Rajadell</option>
            <option value="71400">Reus</option>
            <option value="71209">Riba-roja d'Ebre</option>
            <option value="77303">Ribes de Freser</option>
            <option value="79106">Riells i Viabrea-Breda</option>
            <option value="77200">Ripoll</option>
            <option value="71306">Riudecanyes-Botarell</option>
            <option value="79204">Riudellots</option>
            <option value="72100">Roda de Barà</option>
            <option value="72101">Roda de Mar</option>
            <option value="72501">Rubí</option>
            <option value="78704">Sabadell Centre</option>
            <option value="78709">Sabadell Nord</option>
            <option value="78703">Sabadell Sud</option>
            <option value="76001">Salomó</option>
            <option value="65410">Salou</option>
            <option value="79403">Sant Adrià del Besòs</option>
            <option value="79501">Sant Andreu de Llavaneres</option>
            <option value="79104">Sant Celoni</option>
            <option value="72502">Sant Cugat del Vallès</option>
            <option value="72301">Sant Feliu de Llobregat</option>
            <option value="78501">Sant Guim de Freixenet</option>
            <option value="72302">Sant Joan Despí</option>
            <option value="79304">Sant Jordi Desvalls</option>
            <option value="78502">Sant Martí Sesgueioles</option>
            <option value="77104">Sant Martí de Centelles</option>
            <option value="79306">Sant Miquel de Fluvià</option>
            <option value="78610">Sant Miquel de Gonteres-Viladecavalls</option>
            <option value="79602">Sant Pol de Mar</option>
            <option value="77113">Sant Quirze de Besora</option>
            <option value="72207">Sant Sadurní d'Anoia</option>
            <option value="71600">Sant Vicenç de Calders</option>
            <option value="78604">Sant Vicenç de Castellet</option>
            <option value="77003">Santa Perpètua de Mogoda</option>
            <option value="79608">Santa Susanna</option>
            <option value="78504">Seguers-Sant Pere Sallavinera</option>
            <option value="71602">Segur de Calafell</option>
            <option value="79202">Sils</option>
            <option value="71701">Sitges</option>
            <option value="71500">Tarragona</option>
            <option value="78700">Terrassa</option>
            <option value="78710">Terrassa Est</option>
            <option value="79607">Tordera</option>
            <option value="77111">Torelló</option>
            <option value="71503">Torredembarra</option>
            <option value="65400">Tortosa</option>
            <option value="77305">Toses</option>
            <option value="78408">Tàrrega</option>
            <option value="65314">Ulldecona-Alcanar-La Sénia</option>
            <option value="77307">Urtx-Alp</option>
            <option value="78606">Vacarisses</option>
            <option value="78607">Vacarisses-Torreblanca</option>
            <option value="76004">Valls</option>
            <option value="77109">Vic</option>
            <option value="71401">Vila-seca</option>
            <option value="76002">Vilabella</option>
            <option value="71709">Viladecans</option>
            <option value="78609">Viladecavalls</option>
            <option value="72204">Vilafranca del Penedès</option>
            <option value="79311">Vilajuïga</option>
            <option value="79308">Vilamalla</option>
            <option value="71700">Vilanova i la Geltrú</option>
            <option value="79410">Vilassar de Mar</option>
            <option value="73009">Vilaverd</option>
            <option value="73006">Vimbodí</option>
            <option value="73005">Vinaixa</option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
