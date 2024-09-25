import ambiente from "./img/ambiente.png"



const image = document.createElement('img');
const headline = document.createElement('h1');
const underheadText = document.createElement('p');

image.src = ambiente;

headline.textContent="Welcome to the Belly";

underheadText.innerHTML='If you want to prove the best dishes of our city, You came to the right place,<br>';
underheadText.innerHTML+='Dishes prepared by the most requinted cheffs of the world<br>';
underheadText.innerHTML+='Handpicked ingredients, produced by locals, following all the michelin standards on their growth<br>';
underheadText.innerHTML+='Drinks from all over the world, so you thirst has no chance of ruining your appetite<br>';



function homepage(){
    const content =  document.getElementById('content');
    content.appendChild(image);
    content.appendChild(headline);
    content.appendChild(underheadText);
    console.log('executed');
}


export {homepage};