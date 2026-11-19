// =========================================================
// PONTO DE PARTIDA · formulario.js
// Valida o formulário "Leve para sua escola" e mostra as
// mensagens de erro e de sucesso na própria página (sem alert).
// =========================================================

const form = document.querySelector("#form-escola");
const mensagemForm = document.querySelector("#mensagem-form");

// Regras de cada campo: a função devolve "" se está ok, ou o texto do erro.
const regras = {
  nome: (valor) => {
    if (valor.trim() === "") return "Informe seu nome.";
    if (valor.trim().length < 3) return "O nome precisa ter pelo menos 3 letras.";
    return "";
  },
  email: (valor) => {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor.trim() === "") return "Informe seu e-mail.";
    if (!formatoEmail.test(valor.trim())) return "Digite um e-mail válido, como nome@escola.com.";
    return "";
  },
  perfil: (valor) => (valor === "" ? "Selecione uma opção." : ""),
  escola: (valor) => (valor.trim() === "" ? "Informe o nome da escola." : ""),
  cidade: (valor) => (valor.trim() === "" ? "Informe a cidade." : ""),
  alunos: (valor) => {
    if (valor === "") return "Informe o número aproximado de alunos.";
    const numero = Number(valor);
    if (!Number.isInteger(numero)) return "Use um número inteiro, sem vírgula.";
    if (numero < 1) return "O número de alunos precisa ser maior que zero.";
    if (numero > 100000) return "Confira o número: o máximo aceito é 100.000.";
    return "";
  },
  aceite: (marcado) => (marcado ? "" : "Você precisa aceitar para enviarmos o contato.")
};

// Valida um campo, escreve a mensagem embaixo dele e marca aria-invalid
function validarCampo(nomeCampo) {
  const campo = form.elements[nomeCampo];
  const valor = campo.type === "checkbox" ? campo.checked : campo.value;
  const erro = regras[nomeCampo](valor);

  document.querySelector("#erro-" + nomeCampo).textContent = erro;
  campo.setAttribute("aria-invalid", erro ? "true" : "false");

  return erro === "";
}

// Valida ao sair de cada campo (feedback imediato)
Object.keys(regras).forEach((nomeCampo) => {
  form.elements[nomeCampo].addEventListener("blur", () => validarCampo(nomeCampo));
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let primeiroInvalido = null;
  Object.keys(regras).forEach((nomeCampo) => {
    const valido = validarCampo(nomeCampo);
    if (!valido && !primeiroInvalido) {
      primeiroInvalido = form.elements[nomeCampo];
    }
  });

  mensagemForm.hidden = false;

  if (primeiroInvalido) {
    mensagemForm.className = "mensagem-form mensagem-form--erro";
    mensagemForm.textContent = "Alguns campos precisam de atenção. Confira as mensagens em vermelho.";
    primeiroInvalido.focus();
    return;
  }

  const nome = form.elements.nome.value.trim().split(/\s+/)[0];
  const escola = form.elements.escola.value.trim();

  mensagemForm.className = "mensagem-form mensagem-form--sucesso";
  mensagemForm.textContent = "Obrigado, " + nome + "! Recebemos o interesse da escola " + escola +
    ". Na versão final, a equipe responderia pelo e-mail informado.";

  form.reset();
  Object.keys(regras).forEach((nomeCampo) => {
    form.elements[nomeCampo].removeAttribute("aria-invalid");
  });
  mensagemForm.focus();
});
