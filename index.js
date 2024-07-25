const PI = 3.14159;
let radius;
let gar;

document.getElementById("btn").onclick = function(){
 radius = document.getElementById("myText").value;
    radius = Number(radius);
    gar = 2 * PI * radius;
    document.getElementById("h3").textContent = gar;
}