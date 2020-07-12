/** @format */

"use strict";
function renderProductMenu(dataHMenu) {
  if (!Array.isArray(dataHMenu)) {
    return console.error("Reikia Array");
  }
  let HTML = "";
  for (let i = 0; i < dataHMenu.length; i++) {
    HTML += `<div class="produktas">
    <img src='./img/${dataHMenu[i].img}'>
    <h3>${dataHMenu[i].h}</h3>
    <h4>Tekstas</h4>
    <div class = "price_row">
      <h3>Nuo 8,75</h3>
      <button class="pasirinkti">Krepselis</button>
    </div>`;
  }

  let headerMenu = document.querySelector(".pica_row");

  return (headerMenu.innerHTML = HTML);
}

console.log(renderProductMenu(picos));
