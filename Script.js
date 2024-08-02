const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
{
enunciado: "Qual o impacto da intolerância religiosa atualmente?",
alternativas: [
{
texto: "o aumento da violência na população",
afirmacao: "Socialmente,a intoleância religosa acarreta diversas consequências,inclusive a violência por parte de seus praticantes sendo manifestada por meio de agressão física ou verbal."
},
{
texto: "o aumento da violência na população",
afirmacao: "Socialmente,a intoleância religosa acarreta diversas consequências,inclusive a violência por parte de seus praticantes sendo manifestada por meio de agressão física ou verbal."
}
]
},
{
enunciado: "Culturalmente?",
alternativas: [
{
texto: "falta de conhecimento",
afirmacao: "Culturalmente,as questões religiosas levam a violência pelo desconhecer de determinada práticas ou por falta de costume de quem comete o ato. "
},
{
texto: " falta de conhecimento",
afirmacao: "Culturalmente,as questões religiosas levam a violência pleo desconhecer de determinada práticas ou por falta de costume de quem comete o ato."
}
]
},
{
enunciado: "como a violência influencia ambientalmente?",
alternativas: [
{
texto: "afeta toda a vida ao nosso redor",
afirmacao: "Ambientalmente,afeta todo o âmbito em que vivemos prejudicando a qualidade de vida dos seres que sofrem essa violência."
},
{
texto: "afeta toda a vida ao nosso redor",
afirmacao: "Ambientalmente,afeta todo o âmbito em que vivemos prejudicando a qualidade de vida dos seres que sofrem essa violência."
}
]

},
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
if (atual >= perguntas.length) {
mostraResultado();
return;
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}
function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas) {
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}
function respostaSelecionada(opcaoSelecionada) {
const afirmacoes = opcaoSelecionada.afirmacao;
historiaFinal += afirmacoes + " ";
atual++;
mostraPergunta();
}
function mostraResultado() {
caixaPerguntas.textContent = "Podemos concluir que...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}
mostraPergunta();
