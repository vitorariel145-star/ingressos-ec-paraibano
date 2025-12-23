document.addEventListener("DOMContentLoaded", function () {

  let setor = null;
  let tipo = null;
  let valor = 0;

  // CARREGAR VENDIDOS SALVOS
  let vendidos = localStorage.getItem("vendidos");
  if (vendidos === null) {
    vendidos = 0;
  } else {
    vendidos = parseInt(vendidos);
  }

  const status = document.getElementById("status");
  const resumo = document.getElementById("resumo");
  const comprarBtn = document.getElementById("comprarBtn");

  status.innerText = "Ingressos vendidos: " + vendidos;

  window.selecionarSetor = function (nome) {
    setor = nome;
    atualizarResumo();
  };

  window.selecionarTipo = function (nome, preco) {
    tipo = nome;
    valor = preco;
    atualizarResumo();
  };

  function atualizarResumo() {
    if (setor && tipo) {
      resumo.innerHTML =
        `<p><strong>Selecionado:</strong> ${setor} – ${tipo}</p>
         <p><strong>Valor:</strong> R$ ${valor}</p>`;
      comprarBtn.style.display = "block";
    }
  }

  window.comprar = function () {
    vendidos++;
    localStorage.setItem("vendidos", vendidos);
    status.innerText = "Ingressos vendidos: " + vendidos;

    // reset
    setor = null;
    tipo = null;
    valor = 0;
    resumo.innerHTML = "";
    comprarBtn.style.display = "none";
  };

});
