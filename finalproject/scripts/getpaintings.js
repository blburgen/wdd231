const url = './data/paintings.json';

const cards = document.querySelector('#cards');

async function getmembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.paintings);
    displayArt(data.paintings);
}

const displayArt = (paintings) => {
    paintings.forEach((painting) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');

        name.textContent = painting.paintingName;
        name.setAttribute('class', 'name');

        image.setAttribute('src', painting.imageUrl);
        image.setAttribute('alt', `photo of ${painting.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(image);

        cards.appendChild(card);

    });
}

getmembers();