let setor = null;
let tipo = null;
let valor = 0;
let vendidos = 0;

function selecionarSetor(nome) {
  setor = nome;
  atualizarResumo();
}

function selecionarTipo(nome, preco) {
  tipo = nome;
  valor = preco;
  atualizarResumo();
}

function atualizarResumo() {
  if (setor && tipo) {
    document.getElementById("resumo").innerHTML =
      `<p><strong>Selecionado:</strong> ${setor} – ${tipo}</p>
       <p><strong>Valor:</strong> R$ ${valor}</p>`;
    document.getElementById("comprarBtn").style.display = "block";
  }
}

function comprar() {
  vendidos++;
  document.getElementById("status").innerText =
    "Ingressos vendidos: " + vendidos;

  // reset
  setor = null;
  tipo = null;
  valor = 0;
  document.getElementById("resumo").innerHTML = "";
  document.getElementById("comprarBtn").style.display = "none";
}
