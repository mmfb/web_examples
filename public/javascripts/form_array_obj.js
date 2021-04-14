var marcacoes = [];

function adicionar() {
    let monumento = document.getElementById("monumento").value;
    let hora = parseInt(document.getElementById("hora").value);
    let marcacao = {
        monumento: monumento,
        hora: hora
    };
    marcacoes.push(marcacao);
    mostrarMarcacoes(marcacoes);    
}

function mostrarMarcacoes(listaMarc) {
    let html = "";
    for(let marc of listaMarc) {
        html += `<section>
        <h4>${marc.monumento}</h4>
        <p>Hora: ${marc.hora}:00</p>
        </section>`;
    }
    document.getElementById("marcacoes").innerHTML = html;
}