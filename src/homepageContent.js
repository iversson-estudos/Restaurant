import logo from "./img/logo.png"



const image = document.createElement('img');
const headline = document.createElement('h1');
const underheadText = document.createElement('p');

image.src = logo;

headline.textContent="DELICIAS DO SUL";

underheadText.innerHTML='Sejam bem vindos a melhor padaria de Porto Nacional<br>';
underheadText.innerHTML+='Aqui você encontra salgados e doces com muita variedade e sabor<br>'
underheadText.innerHTML+='Todos feitos com muito carinho e amor<br>';
const headerDiv = document.createElement('div');
headerDiv.id='headerDiv';
headerDiv.appendChild(headline);
headerDiv.appendChild(image);

function homepage(){
    
    const content =  document.getElementById('content');
    content.innerHTML='';
    content.appendChild(headerDiv);
    content.appendChild(underheadText);
}


export {homepage};