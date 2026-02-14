const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
const email = params.get('email');
const number = params.get('tel');
const date = params.get('timestamp');

const here = document.querySelector("#thankyou");
const div = document.createElement('div');
const pone = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");

pone.innerHTML = `First Name: ${fname}`;
p2.innerHTML = `Last Name: ${lname}`;
p3.innerHTML = `Email: ${email}`;
p4.innerHTML = `Mobile Number: ${number}`;
p5.innerHTML = `Time: ${Date(date)}`;

div.appendChild(pone);
console.log(div);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);
div.appendChild(p5);
if(localStorage.getItem('last') != "null"){
    const p6 = document.createElement("p");
    const lastone = localStorage.getItem('last');
    const thisone = localStorage.getItem('current');
    const minutes = Math.floor((thisone - lastone)/60000);
    if(minutes < 120){
        p6.innerHTML = `Your last question was submitted ${minutes} minutes ago.`;
    } else if(minutes < 2880){
        p6.innerHTML = `Your last question was submitted ${(minutes/60).toFixed(2)} hours ago.`;
    } else {
        p6.innerHTML = `Your last question was submitted ${(minutes/1440).toFixed(2)} days ago.`;
    }
    
    div.appendChild(p6);
}
if(localStorage.getItem('current') != params.get('timestamp')){
    localStorage.setItem('last', localStorage.getItem('current'));
    localStorage.setItem('current', params.get('timestamp'));
}

here.appendChild(div);