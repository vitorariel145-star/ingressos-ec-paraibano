let vendidos = localStorage.getItem("vendidos");
let renda = localStorage.getItem("renda");

vendidos = vendidos ? Number(vendidos) : 0;
renda = renda ? Number(renda) : 0;

let valorSelecionado = 0;

function atualizarTela() {
  document.getElementById("vendidos").textContent = vendidos;
  document.getElementById("renda").textContent = renda;
}

function selecionar(valor) {
  valorSelecionado = valor;
  document.getElementById("valorEscolhido").textContent = valor;
  document.getElementById("resumo").style.display = "block";
}

function comprar() {
  if (!valorSelecionado) return;

  vendidos++;
  renda += valorSelecionado;

  localStorage.setItem("vendidos", vendidos);
  localStorage.setItem("renda", renda);

  atualizarTela();
}

window.onload = atualizarTela;
