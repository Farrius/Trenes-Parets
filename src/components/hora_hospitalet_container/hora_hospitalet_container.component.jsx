import React from "react";

export const HoraHospiContainer = props => {
  const regex = /<div class="(sortida|arribada|durada)">([0-9,:].*)</;
  let m;
  if ((m = regex.exec(props.state.html)) !== null) {
    console.log("today", m);
    m.forEach((match, groupIndex) => {
      console.log(`Regex: ${groupIndex}:${match} `);
    });
  } else {
    console.log("El servicio no esta disponible en estos momentos");
  }
  return <h1>hola</h1>;
};
