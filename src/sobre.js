import suelen from "./img/suelen.png";
const img = document.createElement("img");
const historia = document.createElement("p");

img.src = suelen;

historia.innerHTML =
  "Olá meu nome é Suelen Kaufert Zanella e eu sou a proprietária da padaria Delicias do Sul<br>";
historia.innerHTML +=
  "Sou formada em panificação e confeitaria e atuo na área à mais de 10 anos<br>";
historia.innerHTML +=
  "Sempre buscando inovar e aperfeiçoar minha técnica e buscar novidades para meus clientes<br>";

function sobre() {
  const div = document.createElement("div");
  const content = document.getElementById("content");
  div.id = "sobre";
  div.appendChild(img);
  div.appendChild(historia);
  content.innerHTML = "";
  content.appendChild(div);
}

export { sobre };
