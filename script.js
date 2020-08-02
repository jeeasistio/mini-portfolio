import toggleNav from './js/nav.js';
import { addCard, createCard } from './js/createCard.js';

const navUL = document.querySelector('.nav-ul');
const navBtn = document.querySelector('.nav-burger');

toggleNav(navUL, navBtn);