import React from "react";

export const HoraContainer = props => {
  const regex = /<div class="(sortida|arribada|durada)">([0-9,:].*)</gm;
  let m;
  const listaSalida = [];
  while ((m = regex.exec(props.htmlResponse)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    // Si la class es sortida nos quedamos con el valor que hemos conseguido gracias al regex
    if (m[1] === "sortida") listaSalida.unshift(m[2]);
  }
  //Conseguimos la hora actual en string
  const fecha = new Date();
  let minutos = fecha.getMinutes();
  if (minutos < 10) minutos = `0${minutos}`;
  const horas = fecha.getHours();
  const horaActual = `${horas}:${minutos}`;
  const horaActualNum = pasarStringDeTiempoNumero(horaActual);
  //Comparamos los tiempos para saber cual sera el proximo tren
  let proximaSalida;
  listaSalida.forEach(cur => {
    const curNum = pasarStringDeTiempoNumero(cur);
    //Al haber puesto las horas mas peques al final de la array al coger la hora mas grande que esta lo mas a la dercha posible nos da nuestra hora
    if (curNum > horaActualNum) proximaSalida = cur;
  });
  return <div className="hora_container">{proximaSalida}</div>;
};
// Funcion para pasar el tiempo de string al total de minutos
const pasarStringDeTiempoNumero = string => {
  const listaTiempos = string.split(":");
  const horas = parseInt(listaTiempos[0]) * 60;
  return horas + parseInt(listaTiempos[1]);
};
