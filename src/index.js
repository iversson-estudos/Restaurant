import "./styles.css";
import {homepage} from "./homepageContent.js";
import {menu} from "./menu.js";

homepage();

const homeBtn = document.getElementById('home');

const menuBtn = document.getElementById('menu');

const about = document.getElementById('about');

homeBtn.addEventListener('click',homepage);

menuBtn.addEventListener('click',menu);

aboutBtn.addEventListener('click',homepage);