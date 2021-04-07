var nomeMon = "Torre de Belém";
var desMon = "Uma torre em Belém";

window.onload = function() {
    let elem = document.getElementById("header");
    elem.innerHTML = `<h1>${nomeMon}</h1>`;
    
    let corpo = document.getElementById("main");
    let html1 = `<p>${desMon}</p>`;
    corpo.innerHTML = html1;

}
function addKeyword() {
    let elem = document.getElementById("keywords");
    elem.innerHTML = elem.innerHTML + "<section>key</section>" 
} 