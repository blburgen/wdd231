const year = document.getElementById("currentyear")
const timestamp = document.getElementById("timestamp")

const today = new Date();
const loadtime = Date.now();

year.innerHTML = today.getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modification: " + document.lastModified;

timestamp.value = loadtime;