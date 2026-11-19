// =========================================================
// PONTO DE PARTIDA · acessibilidade.js
// Botões A− / A+ (tamanho da fonte) e Alto contraste.
// A escolha fica salva para as outras páginas.
// =========================================================

const raiz = document.documentElement;
const NIVEIS_FONTE = ["fonte-p", "fonte-m", "fonte-g", "fonte-gg"];
const NIVEL_PADRAO = 1;

const btnMenos = document.querySelector("#btn-fonte-menos");
const btnMais = document.querySelector("#btn-fonte-mais");
const btnContraste = document.querySelector("#btn-contraste");

function lerPreferencia(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor === null ? padrao : valor;
  } catch (erro) {
    return padrao;
  }
}

function salvarPreferencia(chave, valor) {
  try {
    localStorage.setItem(chave, valor);
  } catch (erro) {
    // se não der para salvar, só vale para esta página
  }
}

// Se o valor salvo estiver estragado (texto, número fora da lista), volta ao padrão
function nivelValido(valor) {
  const nivel = Number(valor);
  const ok = Number.isInteger(nivel) && nivel >= 0 && nivel < NIVEIS_FONTE.length;
  return ok ? nivel : NIVEL_PADRAO;
}

let nivelFonte = nivelValido(lerPreferencia("pp_fonte", String(NIVEL_PADRAO)));
let contraste = lerPreferencia("pp_contraste", "nao") === "sim";

function aplicarPreferencias() {
  NIVEIS_FONTE.forEach((classe) => raiz.classList.remove(classe));
  raiz.classList.add(NIVEIS_FONTE[nivelFonte]);
  raiz.classList.toggle("alto-contraste", contraste);

  if (btnContraste) btnContraste.setAttribute("aria-pressed", String(contraste));
  // Marca o botão como indisponível no limite. Usamos aria-disabled (e não disabled)
  // para o foco do teclado não sumir quando o botão chega no limite.
  if (btnMenos) btnMenos.setAttribute("aria-disabled", String(nivelFonte === 0));
  if (btnMais) btnMais.setAttribute("aria-disabled", String(nivelFonte === NIVEIS_FONTE.length - 1));
}

function mudarFonte(passo) {
  // Math.min/Math.max seguram o nível dentro da lista
  nivelFonte = Math.min(NIVEIS_FONTE.length - 1, Math.max(0, nivelFonte + passo));
  salvarPreferencia("pp_fonte", String(nivelFonte));
  aplicarPreferencias();
}

if (btnMenos) btnMenos.addEventListener("click", () => mudarFonte(-1));
if (btnMais) btnMais.addEventListener("click", () => mudarFonte(1));

if (btnContraste) {
  btnContraste.addEventListener("click", () => {
    contraste = !contraste;
    salvarPreferencia("pp_contraste", contraste ? "sim" : "nao");
    aplicarPreferencias();
  });
}

aplicarPreferencias();
