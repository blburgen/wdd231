import {interest} from "../data/interest.mjs";

let lastVisitretrive = localStorage.getItem('lastVisit');

let difference = Math.floor((Math.abs(lastVisitretrive-Date.now())) / (1000 * 60 * 60 * 24));

localStorage.setItem('lastVisit', Date.now());

let visit = document.querySelector("lastvisit");

if (difference < 0){
    visit.textContent = "Back so soon! Awesome!"
} else {
    visit.textContent = `You last visited ${difference} days ago`
}