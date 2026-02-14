export function showStuff(x){
    const mydialog = document.querySelector("#mydialog");
    const mytitle = document.querySelector("#mydialog h2");
    const myclose = document.querySelector("#mydialog button");
    const myinfo = document.querySelector("#mydialog p");

    myclose.addEventListener("click", () => mydialog.close());

    mytitle.innerHTML = x.paintingName;
    myinfo.innerHTML = `Price: ${x.price}<br>
        Dimensions(height x width): ${x.height}in x ${x.width}in<br>
        Year: ${x.year}<br>
        Artist: ${x.artist}<br>
        Medium: ${x.medium}<br>
        Description: ${x.descr}`;
    mydialog.showModal();
}
