/** @format */

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
