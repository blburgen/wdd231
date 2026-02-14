import { showStuff } from "./modal.mjs";
const url = './data/paintings.json';

const highlight = document.querySelector('#cards');

async function getmembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.paintings);
    displayArt(data.paintings);
}

const displayArt = (paintings) => {
    let numbers = [];
    while(numbers.length < 3){
        let number = Math.floor(Math.random() * paintings.length);
        while(numbers.includes(number)){
            number = Math.floor(Math.random() * paintings.length);
        }
        numbers.push(number);
        let painting = paintings[number];
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let learn = document.createElement('button');

        card.setAttribute('class', 'painting_card');

        name.textContent = painting.paintingName;
        name.setAttribute('class', 'painting_name');

        image.setAttribute('src', painting.imageUrl);
        image.setAttribute('alt', `photo of ${painting.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', 'auto');
        image.setAttribute('height', 'auto');
        learn.setAttribute('class', 'painting_image');

        learn.textContent = "Learn More";
        learn.setAttribute('class', 'learn_more');
        learn.addEventListener("click", () => showStuff(painting));

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(learn);

        highlight.appendChild(card);
    }
    
}

getmembers();