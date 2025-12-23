let vendidos = 0;

function vender() {
  vendidos++;
  document.getElementById("status").innerText =
    "Ingressos vendidos: " + vendidos;
}
