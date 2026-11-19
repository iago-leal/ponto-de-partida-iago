# Ponto de Partida

> **"O Brasil não tem falta de conteúdo para estudar. Tem falta de saber por onde começar."**

Projeto desenvolvido para a **Global Solution 2026/2 – CitizenTech** (FIAP · Engenharia de Software · Turma 1ESOR).

🔗 **Site publicado:** [link do GitHub Pages](#) <!-- TODO: colar o link -->
🎥 **Vídeo pitch:** [link do vídeo](#) <!-- TODO: colar o link (YouTube "não listado") -->

---

## 📌 Sobre o projeto

O **Ponto de Partida** é um diagnóstico adaptativo de matemática para estudantes do 6º ano ao ensino médio. Ele identifica **a lacuna de aprendizagem de raiz** do estudante e indica **qual conteúdo gratuito estudar primeiro**, na ordem certa.

### Os cidadãos beneficiados
Estudantes do 6º ano ao ensino médio, principalmente de escola pública, que chegaram à série atual com lacunas na base de matemática e não têm acesso a reforço nem a aula particular. Com atenção especial a:
- quem tem dificuldade de aprendizagem e precisa de mais tempo (sem cronômetro, uma pergunta por vez);
- quem tem dificuldade de leitura (perguntas lidas em voz alta);
- quem usa leitor de tela ou tem baixa visão (teclado, alto contraste, ajuste de fonte);
- quem é surdo ou depende de texto (toda explicação é escrita);
- quem estuda longe dos grandes centros, com internet limitada (página leve, sem cadastro).

De forma indireta, o professor, que com turmas de mais de 30 alunos não consegue descobrir sozinho onde cada um travou.

### O problema
A defasagem escolar **se acumula**. Um aluno do 9º ano que não entende equações muitas vezes não tem um problema com equações, e sim com **frações**, conteúdo do 6º ano que nunca aprendeu de verdade. Sem saber disso, ele busca conteúdo da sua série, não entende, perde a confiança e corre o risco de desistir.

Ao mesmo tempo, o professor, com turmas de mais de 30 alunos, não tem como diagnosticar individualmente onde cada um travou.

**Dados reais:**
- Estudantes da rede pública com aprendizado adequado em matemática no Saeb 2023: **43,5% no 5º ano**, **16,5% no 9º ano** e **5,2% no 3º ano do ensino médio**. A queda mostra a lacuna se acumulando.
- No 5º ano, **52%** dos alunos mais ricos têm aprendizado adequado em matemática, contra **32%** dos mais pobres.
- No **PISA 2022**, **73% dos estudantes brasileiros** de 15 anos ficaram abaixo do nível básico em matemática.

Fontes: [Todos Pela Educação, a partir do Saeb 2023/Inep, abril de 2025](https://todospelaeducacao.org.br/wordpress/wp-content/uploads/2025/04/estudo-aprendizagem-na-educacao-basica-no-brasil-pos-pandemia-todos-pela-educacaodocx.pdf); [Iede/QEdu, Saeb 2023](https://portaliede.org.br/avaliacao/qedu-e-atualizado-com-os-dados-de-aprendizado-adequado-no-saeb-2023-confira) (5º ano por nível socioeconômico); [Inep, PISA 2022](https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/pisa).

### A solução
São 5 habilidades em escada, da mais básica para a mais avançada:
`Divisão → Frações → Porcentagem → Equação de 1º grau → Proporção`

1. **Conte sobre você:** o aluno informa a série e, se quiser, como prefere ser chamado. Pode ligar a leitura das perguntas em voz alta (Web Speech API do navegador).
2. **Responda no seu ritmo:** uma pergunta por vez, sem cronômetro. O diagnóstico começa no degrau da série do aluno:
   - errou → recebe a dica na hora e o diagnóstico **volta um degrau**;
   - acertou as duas perguntas do degrau → o degrau está firme e o diagnóstico **sobe um degrau**.
3. **Receba seu caminho:** o ponto de partida é o degrau mais básico que precisa de reforço, logo acima da base firme. O aluno recebe uma explicação curta, aulas gratuitas da Khan Academy e o **caminho degrau por degrau até a sua série**.

São no máximo 10 perguntas. O nome do aluno nunca é guardado: o navegador só lembra o último ponto de partida, para mostrar o avanço quando ele refaz o diagnóstico.

---

## 🌍 Conexão com os ODS da ONU

| ODS | Meta | Como o projeto contribui |
|---|---|---|
| **4 – Educação de qualidade** | 4.1 | Ajuda o aluno a concluir o ensino básico **com aprendizagem efetiva**, e não só com aprovação, ao atacar as lacunas na raiz |
| **4 – Educação de qualidade** | 4.5 | Reduz as disparidades no acesso a uma aprendizagem de qualidade |
| **10 – Redução das desigualdades** | 10.2 | Leva gratuitamente a qualquer aluno com um celular um diagnóstico personalizado que hoje só está ao alcance de quem paga aula particular |

---

## 📈 Impacto e como medir

| Nível | Impacto |
|---|---|
| **Aluno** | Troca o "sou ruim em matemática" por "me falta uma base específica", o que recupera a confiança e o caminho de estudo |
| **Turma** | Permite que o professor faça um reforço direcionado à lacuna mais comum |
| **Rede de ensino** | Mostra onde estão as maiores defasagens por escola e região |

**Indicadores:**
- Percentual de alunos que avançam de nível ao refazer o diagnóstico
- Tempo para identificar a lacuna (de semanas para minutos)
- Número de trilhas de estudo concluídas
- No longo prazo: redução de reprovação e evasão nas escolas parceiras

### Ecossistema
Alunos · Professores · Coordenação pedagógica · Secretarias municipais de educação · Plataformas de conteúdo educacional gratuito

### Próximos passos
- **Painel do professor** com o mapa de lacunas da turma
- Novas disciplinas (Língua Portuguesa) e séries
- Funcionamento offline completo

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3**: Flexbox, Grid e Media Queries
- **JavaScript** puro: arrays de objetos, funções, eventos e manipulação do DOM

> O projeto **não usa frameworks nem bibliotecas**, conforme as regras da Global Solution.

---

## ✅ Funcionalidades

- [x] Página inicial com o problema, um dado real com a fonte e os ODS
- [x] Navegação entre 4 páginas com menu igual em todas
- [x] Simulação interativa: diagnóstico adaptativo com array de 10 questões renderizadas pelo DOM, resultado personalizado pela série e leitura em voz alta
- [x] Formulário "Leve para sua escola" com validação em JavaScript e mensagens na própria página
- [x] Layout responsivo (celular e desktop)
- [x] Acessibilidade: tags semânticas, `alt` nas imagens, `label` nos campos, contraste legível e navegação por teclado


---

## 📁 Estrutura de pastas

```
ponto-de-partida/
├── index.html       # Início: o problema, dado real e ODS
├── solucao.html     # Simulação: diagnóstico interativo
├── impacto.html     # Impacto, indicadores e ODS
├── equipe.html      # Integrantes + formulário
├── css/
│   └── style.css
├── js/
│   ├── acessibilidade.js  # A−/A+ e alto contraste (salvos entre páginas)
│   ├── diagnostico.js     # Questões, cálculo do ponto de partida e trilha
│   └── formulario.js      # Validação do formulário "Leve para sua escola"
├── img/
│   ├── logo.svg
│   └── avatar.svg         # ícone dos integrantes na página de equipe
└── README.md
```

---

## ▶️ Como abrir o projeto

**localmente**
1. Baixe ou descompacte a pasta do projeto.
2. Abra o arquivo `index.html` no navegador (duplo clique).

Não é necessário instalar nada.

---

## 👥 Integrantes

| Nome | RM |
|---|---|
| Iago Bernardes Alves Leal Barbosa | RM574295 |
| Plinio Arteman Pedra | RM574580 |
| João Eduardo Busar Pena | RM575913 |
| Vinícius de Oliveira Gonçalves | RM575053 |

---

## 🤖 Uso de IA generativa

Utilizamos o **Claude (Anthropic)** como apoio em:
- Discussão e refinamento da ideia e do problema
- Organização da estrutura do projeto e deste README
- Explicação de conceitos e apoio na escrita e revisão do código
- Roteiro do vídeo pitch

Todo o código e o texto foram **revisados, compreendidos e ajustados pelo grupo**.

---

## 📚 Fontes

- Todos Pela Educação – Aprendizagem na educação básica no Brasil pós-pandemia (Saeb 2023, abril de 2025): https://todospelaeducacao.org.br/wordpress/wp-content/uploads/2025/04/estudo-aprendizagem-na-educacao-basica-no-brasil-pos-pandemia-todos-pela-educacaodocx.pdf
- Iede/QEdu – Aprendizado adequado no Saeb 2023: https://portaliede.org.br/avaliacao/qedu-e-atualizado-com-os-dados-de-aprendizado-adequado-no-saeb-2023-confira
- INEP – PISA 2022: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/pisa
- ONU – Objetivos de Desenvolvimento Sustentável: https://brasil.un.org/pt-br/sdgs
- BNCC – Base Nacional Comum Curricular: http://basenacionalcomum.mec.gov.br
- Khan Academy em português – aulas e exercícios indicados na trilha de estudo: https://pt.khanacademy.org
