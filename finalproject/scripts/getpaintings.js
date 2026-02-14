import { showStuff } from "./modal.mjs";
const url = './data/paintings.json';

const cards = document.querySelector('#cards');

async function getmembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.paintings);
        displayArt(data.paintings);
    }   catch (error) {
        console.log(error);
    }
}

const displayArt = (paintings) => {
    paintings.forEach((painting) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let size = document.createElement('p');
        let image = document.createElement('img');
        let learn = document.createElement('button');

        card.setAttribute('class', 'painting_card');

        name.textContent = painting.paintingName;
        name.setAttribute('class', 'painting_name');

        size.textContent = `Dimensions(height x width): ${painting.height}in x ${painting.width}in`;
        size.setAttribute('class', 'painting_dimensions');

        image.setAttribute('src', painting.imageUrl);
        image.setAttribute('alt', `photo of ${painting.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '260');
        image.setAttribute('height', 'auto');
        learn.setAttribute('class', 'painting_image');

        learn.textContent = "Learn More";
        learn.setAttribute('class', 'learn_more');
        learn.addEventListener("click", () => showStuff(painting));

        card.appendChild(name);
        card.appendChild(size);
        card.appendChild(image);
        card.appendChild(learn);

        cards.appendChild(card);

    });
}

getmembers();