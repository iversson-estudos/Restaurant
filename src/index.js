import "./styles.css";
import {homepage} from "./homepageContent.js";
import {menu} from "./menu.js";
import {sobre} from "./sobre.js";

homepage();

const homeBtn = document.getElementById('home');

const menuBtn = document.getElementById('menu');

const sobreBtn = document.getElementById('sobre');

homeBtn.addEventListener('click',homepage);

menuBtn.addEventListener('click',menu);

sobreBtn.addEventListener('click',sobre);