import { temples } from "../data/temples.js";
// console.log(temples);

import { url } from "../data/temples.js";
// console.log(url);

const showHere = document.querySelector("#showHere");

const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

myclose.addEventListener("click", () => mydialog.close());


function displayItems(data){
    console.log(data);
    data.forEach(element => {
        console.log(element)
        const photo = document.createElement('img');
        photo.src=`${url}${element.path}`;
        photo.alt=element.name;
        photo.loading="lazy";

        photo.addEventListener("click", () => showStuff(element));

        showHere.appendChild(photo);
    });

}

displayItems(temples);

function showStuff(x){
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`
    mydialog.showModal();
}