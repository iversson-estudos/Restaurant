import logo from "./img/logo.png";

const image = document.createElement("img");
const underheadText = document.createElement("p");

image.src = logo;
image.id = "homepageImg";

underheadText.innerHTML =
  "Sejam bem vindos a melhor padaria de Porto Nacional<br>";
underheadText.innerHTML +=
  "Aqui você encontra salgados e doces com muita variedade e sabor<br>";
underheadText.innerHTML += "Todos feitos com muito amor e carinho<br>";
const infoDiv = document.createElement("div");
infoDiv.id = "infoDiv";
infoDiv.appendChild(image);

function homepage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(infoDiv);
  content.appendChild(underheadText);
}

export { homepage };
