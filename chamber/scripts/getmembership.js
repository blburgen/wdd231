const levels = [
    {
        "membership_name": "np",
        "name": "Non Profit Membership Level",
        "fee": "$0",
        "benifits": `Listed in the directory<br>
        Training`
    },
    {
        "membership_name": "bronze",
        "name": "Bronze Membership Level",
        "fee": "$100",
        "benifits": `Listed in the directory<br>
        Training<br>
        10% event discounts`
    },
    {
        "membership_name": "silver",
        "name": "Silver Membership Level",
        "fee": "$1,000",
        "benifits": `Listed in the directory<br>
        Training<br>
        Listed in spotlight positions on the home page<br>
        30% event discounts`
    },
    {
        "membership_name": "gold",
        "name": "Gold Membership Level",
        "fee": "$10,000",
        "benifits": `Listed in the directory<br>
        Training<br>
        Listed in spotlight positions on the home page<br>
        50% event discounts <br>
        yearly special event`
    }


];
const timestamp = document.getElementById("timestamp")
const membership = document.querySelector("#level");

const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

const loadtime = Date.now();
timestamp.value = loadtime;
myclose.addEventListener("click", () => mydialog.close());


function displayItems(data){
    console.log(data);
    const h2 = document.createElement('h2');
    h2.innerText = "Membership Levels";
    membership.appendChild(h2);
    data.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        const title = document.createElement('h3');
        const click_here = document.createElement('button');
        title.innerHTML = element.name;
        click_here.innerText = "Learn More";
        click_here.title = `${element.name} learn more`


        click_here.addEventListener("click", () => showStuff(element));

        div.appendChild(title);
        div.appendChild(click_here);
        membership.appendChild(div);
    });

}

displayItems(levels);

function showStuff(x){
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `Cost:${x.fee} <br> ${x.benifits}`;
    mydialog.showModal();
}

