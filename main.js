let vendidos = 0;
let renda = 0;

if (localStorage.getItem("vendidos")) {
  vendidos = Number(localStorage.getItem("vendidos"));
}

if (localStorage.getItem("renda")) {
  renda = Number(localStorage.getItem("renda"));
}

function atualizarTela() {
  document.getElementById("vendidos").innerText = vendidos;
  document.getElementById("renda").innerText = renda;
}

function comprar(valor) {
  vendidos++;
  renda += valor;

  localStorage.setItem("vendidos", vendidos);
  localStorage.setItem("renda", renda);

  atualizarTela();
}

window.onload = atualizarTela;
