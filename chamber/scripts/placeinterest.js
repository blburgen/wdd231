import {interest} from "../data/interest.mjs";

let lastVisitretrive = null;
const currentVisit =  Date.now();
// const dateFromString = new Date("2025-03-25");

if(localStorage.getItem('currentVisit') != null){
    localStorage.setItem('lastVisit', localStorage.getItem('currentVisit'));
}

if(localStorage.getItem('lastVisit') != null){
    lastVisitretrive = localStorage.getItem('lastVisit');
}

localStorage.setItem('currentVisit', currentVisit);

let difference = Math.floor((Math.abs(lastVisitretrive-currentVisit)) / (1000 * 60 * 60 * 24));
let visit = document.querySelector("#lastvisit");
console.log(difference)
if (lastVisitretrive == null){
    visit.textContent = "Welcome! Let us know if you have any questions.";
} else if(difference < 1){
    visit.textContent = "Back so soon! Awesome!";
} else if(difference < 2){
    visit.textContent = `You last visited 1 day ago.`;
} else {
    visit.textContent = `You last visited ${difference} days ago.`;
}

// ---------------------  place cards  -------------------------------

const place_cards = document.querySelector("#place_cards");

interest.forEach(place => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const address = document.createElement("address");
    const description = document.createElement("p");
    const figure = document.createElement("figure");
    const photolink = document.createElement("img");
    const learn = document.createElement("button");

    title.innerHTML = place.name;
    address.innerHTML = place.address;
    description.innerHTML = `Description: ${place.description}`;
    photolink.setAttribute('src', place.photo);
    photolink.setAttribute('alt', `Photo of ${place.name}`)
    photolink.setAttribute('loading', 'lazy');
    photolink.setAttribute('class', 'placephoto');
    learn.innerHTML = "Learn More";
    learn.title = `${place.name} learn more`;

    learn.addEventListener("click", () => showStuff(place));

    figure.appendChild(photolink);
    div.appendChild(title);
    div.appendChild(address);
    div.appendChild(description);
    div.appendChild(figure);
    div.appendChild(learn);
    place_cards.appendChild(div);
});

const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

function showStuff(x){
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `Address: ${x.address}<br>${x.description}<br>website: <a href=${x.more} target="_blank">${x.name}<\a>`;
    mydialog.showModal();
}

myclose.addEventListener("click", () => mydialog.close());

