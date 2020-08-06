import toggleNav from './js/nav.js';
import navColor from './js/nav-color.js';
import toggleInactive from './js/about-description.js';
import showMore from './js/show-more.js';
import copy from './js/copy-git.js';

const navUL = document.querySelector('.nav-ul');
const navLi = document.querySelectorAll('.nav-ul a');
const navBtn = document.querySelector('.nav-burger');
const img = document.querySelector('.about-photo-ctn');
const text = document.querySelector('.about-text');
const skills = document.querySelector('.about-skills');
const showBtn = document.querySelector('.show-more');
const projects = document.querySelector('.projects');
const fadeBg = document.querySelector('.fadeBg');
const copyBtns = document.querySelectorAll('.project-git');
const textarea = document.querySelector('.copy-textarea');
const x = matchMedia('(max-width: 360px)');

toggleNav(navUL, navBtn);
navColor(navUL, navLi);
toggleInactive(img, text, skills);
showMore(showBtn, projects, fadeBg);
copyBtns.forEach(btn => btn.addEventListener('click', () => copy(btn, textarea)));