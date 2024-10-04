import bolococo from "./img/bolococo.png";
import cafe from "./img/cafe.png";
import cappucinno from "./img/cappucinno.png";
import enroladinhodequeijo from "./img/enroladinhodequeijo.png";
import roscas from "./img/roscas.png";
import sanduichenatural from "./img/sanduichenatural.png";

const produtos = [
  { nome: "Bolo de Coco", imagem: bolococo },
  { nome: "Café", imagem: cafe },
  { nome: "Cappucinno", imagem: cappucinno },
  { nome: "Enroladinho de Queijo", imagem: enroladinhodequeijo },
  { nome: "Roscas", imagem: roscas },
  { nome: "Sanduiche Natural", imagem: sanduichenatural },
];

function menu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  produtos.forEach((item) => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.textContent = item.nome;
    img.src = item.imagem;
    div.id = "menu";
    div.appendChild(p);
    div.appendChild(img);

    content.appendChild(div);
  });
}

export { menu };
