// =========================================================
// PONTO DE PARTIDA · diagnostico.js
// Diagnóstico adaptativo: começa no degrau da série do aluno,
// volta um degrau a cada erro e sobe a cada degrau firme, até
// achar a habilidade mais básica que precisa de reforço.
// =========================================================
// ---------- 1. DADOS ----------

// Habilidades em ordem: da mais básica (1) para a mais avançada (5).
// Cada uma tem uma explicação curta (funciona sem internet) e links gratuitos
// para aulas e exercícios da Khan Academy em português (conferidos em 18/11/2026).
const habilidades = [
  {
    id: 1,
    nome: "Divisão",
    serie: "4º e 5º ano",
    explicacao: "Dividir é repartir em partes iguais. Para dividir números grandes, quebre em partes fáceis: 84 ÷ 4 = (80 ÷ 4) + (4 ÷ 4) = 20 + 1 = 21.",
    links: [
      { texto: "Aula: Divisão usando valor posicional (Khan Academy, 4º ano)", url: "https://pt.khanacademy.org/math/pt-4-ano/numeros-multiplicacao-e-divisao-4ano/divisao-valor-posicional-e-area-4ano/v/division-using-understanding-of-place-value" },
      { texto: "Aula: O conceito de divisão (Khan Academy, 4º ano)", url: "https://pt.khanacademy.org/math/pt-4-ano/numeros-multiplicacao-e-divisao-4ano/introducao-divisao/v/the-idea-of-division" },
      { texto: "Exercícios: Divisão com grupos de objetos (Khan Academy)", url: "https://pt.khanacademy.org/math/pt-4-ano/numeros-multiplicacao-e-divisao-4ano/introducao-divisao/e/meaning-of-division" }
    ]
  },
  {
    id: 2,
    nome: "Frações",
    serie: "6º ano",
    explicacao: "Uma fração mostra partes de um todo. Para calcular 3/4 de 20: divida 20 em 4 partes (20 ÷ 4 = 5) e pegue 3 delas (5 × 3 = 15).",
    links: [
      { texto: "Aula: Multiplicação de frações e números inteiros (Khan Academy, 5º ano)", url: "https://pt.khanacademy.org/math/pt-5-ano/numeros-multiplicacao-divisao-com-fracoes-5ano/multiplicacao-de-fracoes-unitarias-e-numeros-inteiros/v/multiplying-fractions-and-whole-numbers" },
      { texto: "Aula: Comparação de frações com denominadores diferentes (Khan Academy, 6º ano)", url: "https://pt.khanacademy.org/math/6-ano-matematica/numeros-fracoes/comparacao-de-fracoes-com-denominadores-diferentes/v/comparing-fractions-with-different-denominators" },
      { texto: "Exercícios: Compare frações com denominadores diferentes (Khan Academy)", url: "https://pt.khanacademy.org/math/6-ano-matematica/numeros-fracoes/comparacao-de-fracoes-com-denominadores-diferentes/e/comparing_fractions_2" }
    ]
  },
  {
    id: 3,
    nome: "Porcentagem",
    serie: "6º e 7º ano",
    explicacao: "Porcentagem é uma fração com denominador 100. 10% é dividir por 10; 25% é dividir por 4. Desconto de 25% em R$ 80: 80 ÷ 4 = 20, então o preço final é 80 − 20 = R$ 60.",
    links: [
      { texto: "Aula: Introdução às porcentagens (Khan Academy, 7º ano)", url: "https://pt.khanacademy.org/math/pt-7-ano/numeros-mmc-mdc-porcentagem-7ano/introducao-as-porcentagens/v/percent-from-fraction-models" },
      { texto: "Exercícios: Relacione frações, decimais e porcentagens (Khan Academy)", url: "https://pt.khanacademy.org/math/pt-7-ano/numeros-mmc-mdc-porcentagem-7ano/introducao-as-porcentagens/e/relate-fractions--decimals--and-percents" },
      { texto: "Exercícios: Problemas de porcentagem (Khan Academy)", url: "https://pt.khanacademy.org/math/pt-7-ano/numeros-mmc-mdc-porcentagem-7ano/problemas-de-porcentagem/e/markup_and_commission_word_problems" }
    ]
  },
  {
    id: 4,
    nome: "Equação de 1º grau",
    serie: "7º ano",
    explicacao: "Numa equação, o objetivo é deixar o x sozinho fazendo a operação inversa dos dois lados. Em 3x − 4 = 11: some 4 (3x = 15) e divida por 3 (x = 5).",
    links: [
      { texto: "Aula: A mesma coisa dos dois lados da equação (Khan Academy, 7º ano)", url: "https://pt.khanacademy.org/math/pt-7-ano/algebra-equacoes-7ano/raciocinio-para-equacoes-de-uma-etapa/v/why-we-do-the-same-thing-to-both-sides-simple-equations" },
      { texto: "Aula: Equações de adição e subtração de uma etapa (Khan Academy, 7º ano)", url: "https://pt.khanacademy.org/math/pt-7-ano/algebra-equacoes-7ano/equacao-de-soma-e-subtracao-de-uma-etapa/v/adding-and-subtracting-the-same-thing-from-both-sides" },
      { texto: "Exercícios: Equações de uma etapa (Khan Academy)", url: "https://pt.khanacademy.org/math/pt-7-ano/algebra-equacoes-7ano/equacao-de-soma-e-subtracao-de-uma-etapa/e/one_step_equations" }
    ]
  },
  {
    id: 5,
    nome: "Proporção e regra de três",
    serie: "7º ano",
    explicacao: "Em grandezas proporcionais, se uma dobra, a outra também dobra. Se 2 kg custam R$ 12, 1 kg custa R$ 6, então 5 kg custam 5 × 6 = R$ 30.",
    links: [
      { texto: "Aula: Razões equivalentes (Khan Academy, 7º ano)", url: "https://pt.khanacademy.org/math/pt-7-ano/numeros-razoes-7ano/x6a2222f1cf6da07e:razoes-equivalentes/v/equivalent-ratios" },
      { texto: "Aula: Razões equivalentes em uma receita (Khan Academy, 7º ano)", url: "https://pt.khanacademy.org/math/pt-7-ano/numeros-razoes-7ano/x6a2222f1cf6da07e:razoes-equivalentes/v/ratios-for-recipes" },
      { texto: "Exercícios: Problemas de razões equivalentes (Khan Academy)", url: "https://pt.khanacademy.org/math/pt-7-ano/numeros-razoes-7ano/x6a2222f1cf6da07e:razoes-equivalentes/e/ratio_word_problems" }
    ]
  }
];

// 10 questões (2 por habilidade). O campo "habilidade" liga a questão à habilidade.
const questoes = [
  { habilidade: 1, pergunta: "Quanto é 84 ÷ 4?", opcoes: ["24", "21", "22", "20"], correta: "21",
    dica: "Quebre o 84 em 80 + 4. 80 ÷ 4 = 20 e 4 ÷ 4 = 1. Somando: 21." },
  { habilidade: 1, pergunta: "Três amigos vão dividir R$ 45 igualmente. Quanto cada um recebe?", opcoes: ["R$ 12", "R$ 18", "R$ 15", "R$ 14"], correta: "R$ 15",
    dica: "Dividir igualmente é fazer 45 ÷ 3. Pense: 3 × 15 = 45." },
  { habilidade: 2, pergunta: "Quanto é 3/4 de 20?", opcoes: ["12", "15", "16", "5"], correta: "15",
    dica: "Divida 20 em 4 partes iguais (5 cada) e pegue 3 delas: 5 × 3 = 15." },
  { habilidade: 2, pergunta: "Qual fração é maior: 2/3 ou 3/5?", opcoes: ["2/3", "3/5", "São iguais"], correta: "2/3",
    dica: "Coloque no mesmo denominador: 2/3 = 10/15 e 3/5 = 9/15. Então 2/3 é maior." },
  { habilidade: 3, pergunta: "Quanto é 10% de 250?", opcoes: ["2,5", "25", "250", "10"], correta: "25",
    dica: "10% é o mesmo que dividir por 10: 250 ÷ 10 = 25." },
  { habilidade: 3, pergunta: "Uma camiseta de R$ 80 está com 25% de desconto. Qual é o preço final?", opcoes: ["R$ 55", "R$ 20", "R$ 60", "R$ 65"], correta: "R$ 60",
    dica: "25% é 1/4. 80 ÷ 4 = 20 de desconto. 80 − 20 = R$ 60." },
  { habilidade: 4, pergunta: "Se x + 7 = 15, quanto vale x?", opcoes: ["22", "8", "7", "9"], correta: "8",
    dica: "Tire 7 dos dois lados: x = 15 − 7 = 8." },
  { habilidade: 4, pergunta: "Se 3x − 4 = 11, quanto vale x?", opcoes: ["5", "4", "3", "7"], correta: "5",
    dica: "Some 4 dos dois lados (3x = 15) e depois divida por 3 (x = 5)." },
  { habilidade: 5, pergunta: "2 kg de feijão custam R$ 12. Quanto custam 5 kg?", opcoes: ["R$ 24", "R$ 60", "R$ 30", "R$ 15"], correta: "R$ 30",
    dica: "Descubra o preço de 1 kg (12 ÷ 2 = 6) e multiplique por 5: R$ 30." },
  { habilidade: 5, pergunta: "Uma receita para 4 pessoas usa 6 ovos. Quantos ovos são necessários para 10 pessoas?", opcoes: ["12", "20", "16", "15"], correta: "15",
    dica: "Para 2 pessoas são 3 ovos. 10 pessoas são 5 vezes isso: 5 × 3 = 15." }
];

// ---------- 2. CONFIGURAÇÃO ----------

// Degrau em que o diagnóstico começa, de acordo com a série do aluno
const DEGRAU_INICIAL = { "6": 2, "7": 3, "8": 4, "9": 5, "em": 5 };
const NOME_SERIE = { "6": "6º ano", "7": "7º ano", "8": "8º ano", "9": "9º ano", "em": "ensino médio" };

// Trava de segurança: o caminho mais longo possível usa 8 perguntas
const MAX_PERGUNTAS = 10;

const CHAVE_RESULTADO = "pontoDePartida_ultimoResultado";

// ---------- 3. ESTADO ----------
let perfil = { apelido: "", serie: "", lerEmVoz: false };
let degrauAtual = 1;
let perguntaNoDegrau = 0;   // 0 = primeira questão do degrau, 1 = segunda
let questaoAtual = null;
let opcoesExibidas = [];    // as alternativas na ordem em que aparecem na tela
let situacao = {};          // ex.: { 5: "reforcar", 4: "reforcar", 3: "firme" }
let respostas = [];         // ex.: [{ habilidade: 5, acertou: false }]
let proximoPasso = null;    // { fim: false, degrau, pergunta } ou { fim: true, ponto }

// ---------- 4. ELEMENTOS DA PÁGINA ----------
const telaInicio = document.querySelector("#tela-inicio");
const telaQuestao = document.querySelector("#tela-questao");
const telaResultado = document.querySelector("#tela-resultado");

const ultimoResultado = document.querySelector("#ultimo-resultado");
const formPerfil = document.querySelector("#form-perfil");
const inputApelido = document.querySelector("#apelido");
const selectSerie = document.querySelector("#serie");
const erroSerie = document.querySelector("#erro-serie");
const campoVoz = document.querySelector("#campo-voz");
const checkVoz = document.querySelector("#ler-voz");
const listaHabilidades = document.querySelector("#lista-habilidades");

const numeroQuestao = document.querySelector("#numero-questao");
const mapaEscada = document.querySelector("#mapa-escada");
const formQuestao = document.querySelector("#form-questao");
const enunciado = document.querySelector("#enunciado");
const etiquetaHabilidade = document.querySelector("#etiqueta-habilidade");
const opcoes = document.querySelector("#opcoes");
const feedback = document.querySelector("#feedback");
const btnResponder = document.querySelector("#btn-responder");
const btnProxima = document.querySelector("#btn-proxima");
const btnOuvir = document.querySelector("#btn-ouvir");

const tituloResultado = document.querySelector("#titulo-resultado");
const textoResultado = document.querySelector("#texto-resultado");
const comparacao = document.querySelector("#comparacao");
const resumo = document.querySelector("#resumo");
const explicacao = document.querySelector("#explicacao");
const linksTrilha = document.querySelector("#links-trilha");
const blocoCaminho = document.querySelector("#bloco-caminho");
const caminho = document.querySelector("#caminho");
const btnRefazer = document.querySelector("#btn-refazer");
const btnTrocarSerie = document.querySelector("#btn-trocar-serie");

// ---------- 5. FUNÇÕES AUXILIARES ----------
function buscarHabilidade(id) {
  return habilidades.find((h) => h.id === id);
}

function questoesDoDegrau(id) {
  return questoes.filter((q) => q.habilidade === id);
}

function mostrarTela(tela) {
  telaInicio.hidden = tela !== telaInicio;
  telaQuestao.hidden = tela !== telaQuestao;
  telaResultado.hidden = tela !== telaResultado;
}

// Embaralha uma cópia do array (algoritmo de Fisher-Yates).
// Assim a resposta certa muda de lugar quando o aluno refaz o diagnóstico.
function embaralhar(lista) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Cria um link que abre em nova aba e avisa isso ao leitor de tela
function criarLink(link) {
  const a = document.createElement("a");
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = link.texto;

  const aviso = document.createElement("span");
  aviso.className = "visualmente-oculto";
  aviso.textContent = " (abre em nova aba)";
  a.appendChild(aviso);
  return a;
}

// localStorage pode estar bloqueado (aba anônima etc.), por isso o try/catch.
// Só guardamos o degrau do resultado, nunca o nome do aluno.
function lerUltimoResultado() {
  try {
    const texto = localStorage.getItem(CHAVE_RESULTADO);
    if (!texto) return null;

    const dado = JSON.parse(texto);
    const formatoOk = dado !== null &&
      typeof dado.nome === "string" &&
      (dado.id === null || buscarHabilidade(dado.id) !== undefined);

    return formatoOk ? dado : null;
  } catch (erro) {
    return null;
  }
}

function salvarResultado(resultado) {
  try {
    localStorage.setItem(CHAVE_RESULTADO, JSON.stringify(resultado));
  } catch (erro) {
    // sem problema: o diagnóstico continua funcionando sem salvar
  }
}

// ---------- 6. LEITURA EM VOZ ALTA ----------
// Usa a voz do próprio navegador (Web Speech API), sem nenhuma biblioteca.
const temVoz = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;

// Troca símbolos por palavras para a leitura sair natural
function textoParaFala(texto) {
  return texto
    .replace(/(\d+)\/(\d+)/g, "$1 sobre $2")
    .replace(/R\$\s?(\d+)/g, "$1 reais")
    .replace(/÷/g, " dividido por ")
    .replace(/×/g, " vezes ")
    .replace(/−/g, " menos ")
    .replace(/=/g, " igual a ");
}

function falar(texto) {
  if (!perfil.lerEmVoz || !temVoz) return;
  window.speechSynthesis.cancel();
  const fala = new SpeechSynthesisUtterance(textoParaFala(texto));
  fala.lang = "pt-BR";
  fala.rate = 0.95;
  window.speechSynthesis.speak(fala);
}

function pararFala() {
  if (temVoz) window.speechSynthesis.cancel();
}

function falarPergunta() {
  falar(questaoAtual.pergunta + " Alternativas: " + opcoesExibidas.join("; ") + ".");
}

// ---------- 7. TELA INICIAL: CONTE SOBRE VOCÊ ----------
function mostrarInicio() {
  pararFala();

  listaHabilidades.innerHTML = "";
  habilidades.forEach((habilidade) => {
    const item = document.createElement("li");
    const nome = document.createElement("strong");
    nome.textContent = habilidade.nome;
    const serie = document.createElement("span");
    serie.textContent = habilidade.serie;
    item.appendChild(nome);
    item.appendChild(serie);
    listaHabilidades.appendChild(item);
  });

  // Sem suporte a voz no navegador, a opção nem aparece
  campoVoz.hidden = !temVoz;

  // Ao trocar a série, o formulário volta preenchido com o que a pessoa já tinha dito
  inputApelido.value = perfil.apelido;
  selectSerie.value = perfil.serie;
  checkVoz.checked = perfil.lerEmVoz;

  const anterior = lerUltimoResultado();
  if (anterior) {
    ultimoResultado.textContent = "Da última vez, seu ponto de partida foi " + anterior.nome +
      ". Refaça para ver se você subiu na escada.";
    ultimoResultado.hidden = false;
  } else {
    ultimoResultado.hidden = true;
  }

  mostrarTela(telaInicio);
}

function enviarPerfil(evento) {
  evento.preventDefault();

  const serie = selectSerie.value;
  if (!Object.prototype.hasOwnProperty.call(DEGRAU_INICIAL, serie)) {
    erroSerie.textContent = "Escolha sua série para o diagnóstico saber por onde começar.";
    selectSerie.setAttribute("aria-invalid", "true");
    selectSerie.focus();
    return;
  }

  erroSerie.textContent = "";
  selectSerie.removeAttribute("aria-invalid");

  perfil = {
    apelido: inputApelido.value.trim().slice(0, 40),
    serie: serie,
    lerEmVoz: temVoz && checkVoz.checked
  };

  comecar();
}

// ---------- 8. PERGUNTAS ----------
function comecar() {
  degrauAtual = DEGRAU_INICIAL[perfil.serie];
  perguntaNoDegrau = 0;
  situacao = {};
  respostas = [];
  mostrarQuestao();
}

// Mapa da escada no topo: mostra o degrau atual e o que já foi visto
function desenharMapa() {
  mapaEscada.innerHTML = "";

  habilidades.forEach((habilidade) => {
    const item = document.createElement("li");
    item.className = "mapa__item";
    // Na tela aparece só o número do degrau; o nome vai para o leitor de tela
    const numero = document.createElement("span");
    numero.setAttribute("aria-hidden", "true");
    numero.textContent = habilidade.id;
    const nome = document.createElement("span");
    nome.className = "visualmente-oculto";
    nome.textContent = "Degrau " + habilidade.id + ", " + habilidade.nome;
    item.appendChild(numero);
    item.appendChild(nome);

    let estado = "";
    if (habilidade.id === degrauAtual) {
      item.classList.add("mapa__item--atual");
      item.setAttribute("aria-current", "step");
      estado = "agora";
    } else if (situacao[habilidade.id] === "firme") {
      item.classList.add("mapa__item--firme");
      estado = "firme";
    } else if (situacao[habilidade.id] === "reforcar") {
      item.classList.add("mapa__item--reforcar");
      estado = "precisa de reforço";
    }

    if (estado) {
      const textoEstado = document.createElement("span");
      textoEstado.className = "visualmente-oculto";
      textoEstado.textContent = " (" + estado + ")";
      item.appendChild(textoEstado);
    }

    mapaEscada.appendChild(item);
  });
}

function mostrarQuestao() {
  questaoAtual = questoesDoDegrau(degrauAtual)[perguntaNoDegrau];
  const habilidade = buscarHabilidade(degrauAtual);

  numeroQuestao.textContent = "Pergunta " + (respostas.length + 1);
  desenharMapa();
  enunciado.textContent = questaoAtual.pergunta;
  etiquetaHabilidade.textContent = "Degrau " + habilidade.id + ": " + habilidade.nome;

  // Cria as opções pelo DOM: <label class="opcao"><input type="radio"> texto</label>
  // A ordem é embaralhada a cada vez, para o aluno não decorar a posição da resposta.
  opcoesExibidas = embaralhar(questaoAtual.opcoes);
  opcoes.innerHTML = "";
  opcoesExibidas.forEach((textoOpcao, i) => {
    const label = document.createElement("label");
    label.className = "opcao";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "resposta";
    input.value = textoOpcao;
    input.id = "opcao-" + i;

    const texto = document.createElement("span");
    texto.textContent = textoOpcao;

    label.appendChild(input);
    label.appendChild(texto);
    opcoes.appendChild(label);
  });

  feedback.textContent = "";
  feedback.className = "feedback";
  btnResponder.hidden = false;
  btnProxima.hidden = true;
  btnOuvir.hidden = !perfil.lerEmVoz;

  mostrarTela(telaQuestao);
  numeroQuestao.focus();
  falarPergunta();
}

// O coração do diagnóstico adaptativo:
// - acertou as duas do degrau -> degrau firme. Se o de cima já precisa de reforço,
//   achamos o ponto de partida; senão, sobe um degrau.
// - errou -> degrau precisa de reforço. Se o de baixo já está firme (ou é o primeiro
//   degrau), achamos o ponto de partida; senão, volta um degrau.
function decidirProximoPasso(acertou) {
  const totalNoDegrau = questoesDoDegrau(degrauAtual).length;

  if (acertou && perguntaNoDegrau < totalNoDegrau - 1) {
    return { fim: false, degrau: degrauAtual, pergunta: perguntaNoDegrau + 1 };
  }

  situacao[degrauAtual] = acertou ? "firme" : "reforcar";
  const ultimoDegrau = habilidades.length;

  let passo;
  if (acertou) {
    if (situacao[degrauAtual + 1] === "reforcar") {
      passo = { fim: true, ponto: degrauAtual + 1 };
    } else if (degrauAtual === ultimoDegrau) {
      passo = { fim: true, ponto: null };
    } else {
      passo = { fim: false, degrau: degrauAtual + 1, pergunta: 0 };
    }
  } else {
    if (degrauAtual === 1 || situacao[degrauAtual - 1] === "firme") {
      passo = { fim: true, ponto: degrauAtual };
    } else {
      passo = { fim: false, degrau: degrauAtual - 1, pergunta: 0 };
    }
  }

  // Trava de segurança: nunca passa do número máximo de perguntas
  if (!passo.fim && respostas.length >= MAX_PERGUNTAS) {
    const reforcos = Object.keys(situacao).map(Number).filter((id) => situacao[id] === "reforcar");
    passo = { fim: true, ponto: reforcos.length ? Math.min(...reforcos) : null };
  }

  return passo;
}

function responder(evento) {
  evento.preventDefault(); // evita recarregar a página

  // Se a pergunta já foi respondida (ex.: Enter apertado duas vezes), não conta de novo
  if (btnResponder.hidden) return;

  const marcada = document.querySelector('input[name="resposta"]:checked');
  if (!marcada) {
    feedback.textContent = "Escolha uma das alternativas antes de responder.";
    feedback.className = "feedback feedback--erro";
    return;
  }

  const acertou = marcada.value === questaoAtual.correta;
  respostas.push({ habilidade: degrauAtual, acertou: acertou });

  // Trava as opções e pinta a certa (verde) e a marcada errada (vermelho)
  opcoes.querySelectorAll("input").forEach((input) => {
    input.disabled = true;
    if (input.value === questaoAtual.correta) {
      input.parentElement.classList.add("opcao--certa");
    } else if (input === marcada) {
      input.parentElement.classList.add("opcao--errada");
    }
  });

  proximoPasso = decidirProximoPasso(acertou);

  let mensagem = acertou
    ? "Isso mesmo: " + questaoAtual.correta + "."
    : "Não foi dessa vez. A resposta é " + questaoAtual.correta + ". Dica: " + questaoAtual.dica;

  // Explica para onde o diagnóstico vai agora
  if (!proximoPasso.fim && proximoPasso.degrau !== degrauAtual) {
    const destino = buscarHabilidade(proximoPasso.degrau).nome.toLowerCase();
    mensagem += proximoPasso.degrau < degrauAtual
      ? " Vamos voltar um degrau, para " + destino + "."
      : " Esse degrau está firme. Vamos subir para " + destino + ".";
  }

  feedback.textContent = mensagem;
  feedback.className = "feedback " + (acertou ? "feedback--certo" : "feedback--erro");

  btnProxima.textContent = proximoPasso.fim ? "Ver meu resultado" : "Próxima pergunta";
  btnResponder.hidden = true;
  btnProxima.hidden = false;
  btnProxima.focus();
  falar(mensagem);
}

function proxima() {
  if (proximoPasso.fim) {
    mostrarResultado(proximoPasso.ponto);
    return;
  }
  degrauAtual = proximoPasso.degrau;
  perguntaNoDegrau = proximoPasso.pergunta;
  mostrarQuestao();
}

// ---------- 9. RESULTADO PERSONALIZADO ----------
function mostrarResultado(idPonto) {
  const ponto = idPonto ? buscarHabilidade(idPonto) : null;
  const degrauDaSerie = DEGRAU_INICIAL[perfil.serie];
  const serieTexto = NOME_SERIE[perfil.serie];
  const anterior = lerUltimoResultado();

  if (ponto) {
    tituloResultado.textContent = (perfil.apelido ? perfil.apelido + ", seu" : "Seu") +
      " ponto de partida é " + ponto.nome.toLowerCase();

    if (ponto.id < degrauDaSerie) {
      textoResultado.textContent = ponto.nome + " é conteúdo do " + ponto.serie +
        ". Você está no " + serieTexto + ", então essa base ficou para trás. Isso é mais comum do que parece " +
        "e tem jeito: começando por aqui, os degraus seguintes ficam mais fáceis.";
    } else if (ponto.id === degrauDaSerie) {
      textoResultado.textContent = "As bases anteriores estão firmes. Falta reforçar " +
        ponto.nome.toLowerCase() + ", que é o conteúdo esperado para o " + serieTexto + ".";
    } else {
      textoResultado.textContent = "Você está à frente da sua série: as bases esperadas para o " + serieTexto +
        " estão firmes. O próximo desafio é " + ponto.nome.toLowerCase() + ".";
    }
  } else {
    tituloResultado.textContent = (perfil.apelido ? perfil.apelido + ", você" : "Você") +
      " passou por todos os degraus";
    textoResultado.textContent = "Divisão, frações, porcentagem, equação e proporção estão firmes. " +
      "Dá para seguir para conteúdos mais avançados da sua série.";
  }

  // Compara com a última vez (mostra o avanço = impacto medido)
  if (anterior) {
    const ordemAntes = anterior.id || habilidades.length + 1;
    const ordemAgora = ponto ? ponto.id : habilidades.length + 1;
    let mensagem = "Da última vez, seu ponto de partida foi " + anterior.nome + ". Agora é " +
      (ponto ? ponto.nome : "a base completa") + ".";
    if (ordemAgora > ordemAntes) mensagem += " Você subiu na escada.";
    comparacao.textContent = mensagem;
    comparacao.hidden = false;
  } else {
    comparacao.hidden = true;
  }

  montarResumo(ponto);
  montarTrilha(ponto, degrauDaSerie);

  salvarResultado({ id: ponto ? ponto.id : null, nome: ponto ? ponto.nome : "a base completa" });

  mostrarTela(telaResultado);
  tituloResultado.focus();
  falar(tituloResultado.textContent + ". " + textoResultado.textContent);
}

// Um item por degrau: firme, reforçar, não precisou testar ou depois
function montarResumo(ponto) {
  resumo.innerHTML = "";

  const firmesTestados = Object.keys(situacao).map(Number).filter((id) => situacao[id] === "firme");
  const maiorFirme = firmesTestados.length ? Math.max(...firmesTestados) : 0;

  habilidades.forEach((habilidade) => {
    const daHabilidade = respostas.filter((r) => r.habilidade === habilidade.id);
    const acertos = daHabilidade.filter((r) => r.acertou).length;
    const estado = situacao[habilidade.id];

    let texto;
    let classe;
    if (estado === "firme") {
      texto = acertos + " de " + daHabilidade.length + " · Firme";
      classe = "resumo__status--ok";
    } else if (estado === "reforcar") {
      texto = acertos + " de " + daHabilidade.length + " · Reforçar";
      classe = "resumo__status--reforco";
    } else if (habilidade.id < maiorFirme) {
      texto = "Base firme, não precisou testar";
      classe = "resumo__status--neutro";
    } else {
      texto = "Fica para depois";
      classe = "resumo__status--neutro";
    }

    const item = document.createElement("li");
    if (ponto && habilidade.id === ponto.id) item.classList.add("resumo__item--partida");

    const nome = document.createElement("span");
    nome.textContent = habilidade.nome;

    const status = document.createElement("span");
    status.className = "resumo__status " + classe;
    status.textContent = texto;

    item.appendChild(nome);
    item.appendChild(status);
    resumo.appendChild(item);
  });
}

// Explicação + links do ponto de partida, e o caminho degrau por degrau até a série do aluno
function montarTrilha(ponto, degrauDaSerie) {
  const habilidade = ponto || habilidades[habilidades.length - 1];

  explicacao.textContent = (ponto ? "A ideia em poucas linhas: " : "Para revisar o último degrau: ") +
    habilidade.explicacao;

  linksTrilha.innerHTML = "";
  habilidade.links.forEach((link) => {
    const item = document.createElement("li");
    item.appendChild(criarLink(link));
    linksTrilha.appendChild(item);
  });

  caminho.innerHTML = "";
  const ultimoDoCaminho = ponto ? Math.max(ponto.id, degrauDaSerie) : 0;

  if (!ponto || ultimoDoCaminho === ponto.id) {
    blocoCaminho.hidden = true;
    return;
  }

  for (let id = ponto.id; id <= ultimoDoCaminho; id++) {
    const etapa = buscarHabilidade(id);
    const item = document.createElement("li");
    if (id === ponto.id) item.classList.add("caminho__item--agora");

    const nome = document.createElement("strong");
    nome.textContent = etapa.nome;

    const detalhe = document.createElement("span");
    detalhe.textContent = id === ponto.id ? "Comece aqui" : "Depois: ";
    if (id !== ponto.id) detalhe.appendChild(criarLink(etapa.links[0]));

    item.appendChild(nome);
    item.appendChild(detalhe);
    caminho.appendChild(item);
  }
  blocoCaminho.hidden = false;
}

// ---------- 10. EVENTOS ----------
formPerfil.addEventListener("submit", enviarPerfil);
formQuestao.addEventListener("submit", responder);
btnProxima.addEventListener("click", proxima);
btnOuvir.addEventListener("click", falarPergunta);
btnRefazer.addEventListener("click", comecar);
btnTrocarSerie.addEventListener("click", mostrarInicio);

mostrarInicio();
