const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Verifica se existem botões e abas antes de executar o código
if (botoes.length > 0 && textos.length > 0) {
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      for (let j = 0; j < botoes.length; j++) {
        if (botoes[j] && textos[j]) {  // Garante que o elemento existe antes de acessar classList
          botoes[j].classList.remove("ativo");
          textos[j].classList.remove("ativo");
        }
      }
      botoes[i].classList.add("ativo");
      textos[i].classList.add("ativo");
    };
  }
} else {
  console.error("Elementos '.botao' ou '.aba-conteudo' não encontrados.");
}

// Contador regressivo
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2026-02-01T00:00:00");

function atualizarContador() {
  let tempoAtual = new Date();
  let diferenca = tempoObjetivo1 - tempoAtual;

  if (diferenca <= 0) {
    if (contadores[0]) contadores[0].textContent = "Tempo encerrado!";
    return;
  }

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  if (contadores[0]) {
    contadores[0].textContent = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
  }
}

// Atualizar contador a cada segundo
if (contadores.length > 0) {
  setInterval(atualizarContador, 1000);
  atualizarContador(); // Chamada inicial
} else {
  console.error("Elemento '.contador' não encontrado.");
}
