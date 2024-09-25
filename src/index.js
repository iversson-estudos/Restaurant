import "./styles.css";
import {homepage} from "./homepageContent.js";

homepage();

const home = document.getElementById('home');

const menu = document.getElementById('menu');

const about = document.getElementById('about');

home.addEventListener('click',homepage);

menu.addEventListener('click',homepage);

about.addEventListener('click',homepage);