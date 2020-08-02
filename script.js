import toggleNav from './js/nav.js';
import toggleInactive from './js/about-description.js';
import { addCard, createCard } from './js/createCard.js';

const navUL = document.querySelector('.nav-ul');
const navBtn = document.querySelector('.nav-burger');
const img = document.querySelector('.about-photo');
const text = document.querySelector('.about-text');
const skills = document.querySelector('.about-skills');

toggleNav(navUL, navBtn);
let showing = text;
toggleInactive(img, text, skills, showing);