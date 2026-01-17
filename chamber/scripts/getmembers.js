const url = './data/members.json';

const cards = document.querySelector('#cards');

async function getmembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let tag_line = document.createElement('p');
        let address = document.createElement('p');
        let email = document.createElement('p');
        let phone_number = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        let level = document.createElement('p');

        name.textContent = member.company_name;
        name.setAttribute('class', 'name');
        
        tag_line.textContent = member.tag_line;
        tag_line.setAttribute('class', 'tagline');
        
        address.textContent = member.company_address;
        email.textContent = `Email: ${member.email}`;
        phone_number.textContent = `Phone: ${member.company_phone_number}`;
        website.textContent = `URL: ${member.company_website}`
        level.textContent = `Membership Level: ${member.membership_level}`;

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', 'auto');

        card.appendChild(name);
        card.appendChild(tag_line);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(email);
        card.appendChild(phone_number);
        card.appendChild(website);
        card.appendChild(level);

        cards.appendChild(card);

    });
}

getmembers();