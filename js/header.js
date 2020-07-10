/** @format */

"use strict";

const navigation = [
  {
    ref: "#picos",
    text: "Picos",
    class: "ref",
  },
  {
    ref: "#uzkandziai",
    text: "Užkandžiai",
    class: "ref",
  },
  {
    ref: "#desertai",
    text: "Desertai",
    class: "ref",
  },
  {
    ref: "#gerimai",
    text: "Gėrimai",
    class: "ref",
  },
  {
    ref: "#kitos_prekes",
    text: "Kitos prekės",
    class: "ref",
  },
  {
    ref: "#kontaktai",
    text: "Kontaktai",
    class: "ref",
  },
];

function renderHeaderMenu(dataHMenu) {
  if (!Array.isArray(dataHMenu)) {
    return console.error("Reikia Array");
  }
  let HTML = "";
  for (let i = 0; i < dataHMenu.length; i++) {
    HTML += `<a href=${dataHMenu[i].ref} class = ${dataHMenu[i].class}>
           ${dataHMenu[i].text}</a>`;
  }

  let headerMenu = document.querySelector("nav");

  return (headerMenu.innerHTML = HTML);
}

console.log(renderHeaderMenu(navigation));
