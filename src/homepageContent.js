import logo from "./img/logo.png";

const image = document.createElement("img");
const underheadText = document.createElement("p");

image.src = logo;
image.id = "homepageImg";

underheadText.innerHTML ="Sejam bem vindos a melhor padaria de Porto Nacional<br><br>";
underheadText.innerHTML +="Aqui você encontra salgados e doces com muita variedade e sabor<br><br>";
underheadText.innerHTML += "Todos feitos com muito amor e carinho<br><br>";
const infoDiv = document.createElement("div");
infoDiv.id = "infoDiv";
infoDiv.appendChild(image);
infoDiv.appendChild(underheadText);

function homepage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(infoDiv);
}

export { homepage };
