const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
const email = params.get('email');
const number = params.get('tel');
const bname = params.get('org-name');
const date = params.get('timestamp');

const here = document.querySelector("#thankyou");
const div = document.createElement('div');
const pone = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");
const p5 = document.createElement("p");
const p6 = document.createElement("p");

pone.innerHTML = `First Name: ${fname}`;
p2.innerHTML = `Last Name: ${lname}`;
p3.innerHTML = `Email: ${email}`;
p4.innerHTML = `Mobile Number: ${number}`;
p5.innerHTML = `Business Name: ${bname}`;
p6.innerHTML = `Time: ${Date(date)}`;

div.appendChild(pone);
console.log(div);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);
div.appendChild(p5);
div.appendChild(p6);

here.appendChild(div);