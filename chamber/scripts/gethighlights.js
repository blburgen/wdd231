const url = './data/members.json';

const cards = document.querySelector('#business_highlight');

async function getmembers() {
    const response = await fetch(url);
    const data = await response.json();
    const filter_data = data.members.filter(user => user.membership_level > 1);
    console.log(filter_data);
    let show_data = [];
    if (filter_data.length > 3){
        let randomNumber = getnumber(filter_data.length);
        randomNumber.forEach(element => {
            show_data.push(filter_data[element]);
        });
    } else {
        show_data = filter_data;
    }
    displayMembers(show_data);
}

const getnumber = (inputNumber)=>{
    let return_number = [];
    while (return_number.length < 3){
        let randomNumber = Math.floor(Math.random()*inputNumber);
        if (return_number.includes(randomNumber)){
            continue;
        } else {
            return_number.push(randomNumber);
        }
    }
    return return_number;
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let tag_line = document.createElement('p');
        let email = document.createElement('p');
        let phone_number = document.createElement('p');
        let level = document.createElement('p');
        let website = document.createElement('a');
        let image = document.createElement('img');

        name.textContent = member.company_name;
        name.setAttribute('class', 'name');
        
        tag_line.textContent = member.tag_line;
        tag_line.setAttribute('class', 'tagline bottom_boarder');
        
        email.textContent = `Email: ${member.email}`;
        phone_number.textContent = `Phone: ${member.company_phone_number}`;
        website.textContent = `${member.company_website}`;
        website.setAttribute('href', `https://www.${member.company_website}`);
        website.setAttribute('class', 'button')

        image.setAttribute('src', member.imageurl);
        image.setAttribute('alt', `Logo of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', 'auto');

        if(member.membership_level == 2){
            level.textContent = "Silver Member"
        } else if (member.membership_level == 3){
            level.textContent = "Gold Member"
        }

        card.appendChild(name);
        card.appendChild(tag_line);
        card.appendChild(image);
        card.appendChild(email);
        card.appendChild(phone_number);
        card.appendChild(level);
        card.appendChild(website);
        cards.appendChild(card);

    });
}

getmembers();