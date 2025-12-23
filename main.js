let vendidos = 0;
let setorSelecionado = "";

function selecionarSetor(setor) {
  setorSelecionado = setor;
  alert("Setor selecionado: " + setor);
}

function comprar(tipo) {
  if (setorSelecionado === "") {
    alert("Escolha um setor primeiro!");
    return;
  }

  vendidos++;
  document.getElementById("status").innerText =
    "Ingressos vendidos: " + vendidos;
}
