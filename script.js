const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "As 24 Horas de Le Mans são uma das corridas de resistência mais icônicas e desafiadoras do automobilismo mundial, realizada anualmente no Circuito de la Sarthe, na França. Durante 24 horas consecutivas, equipes de pilotos se alternam para guiar seus carros de alto desempenho através de um circuito misto, composto por estradas públicas fechadas e trechos de pista permanentes. Você acompanhou a corrida?",
        alternativas: [
            {
                texto: "Sim acompanhei",
                afirmacao: "As 24Horas de Lemans para os amadores de automibilismo é muito aguardada durante o ano. "
            },
            {
                texto: "Não acompanhei a corrida",
                afirmacao: "Não acompanhei, pois não é meu estilo de corrida ou até mesmo não gosto da modalidade de carros mas..."
            }
        ]
    },
    {
        enunciado: "Qual aspecto das 24 Horas de Le Mans você considera mais impressionante: a velocidade vertiginosa dos carros de corrida ou a estratégia meticulosa das equipes ao longo da prova?",
        alternativas: [
            {
                texto: "A velocidade vertiginosa dos carros de corrida em Le Mans é realmente impressionante.",
                afirmacao: "Esses veículos de alta performance rasgando as retas e contornando curvas em velocidades incríveis é uma experiência única e emocionante. No entanto, não podemos ignorar a estratégia meticulosa das equipes. ."
            },
            {
                texto: "Para mim, a estratégia meticulosa das equipes em Le Mans é o que mais impressiona.",
                afirmacao: "É fascinante observar como esses profissionais calculam cada movimento, antecipam desafios e ajustam suas táticas ao longo da corrida. A maneira como gerenciam o desgaste dos pneus, economizam combustível e maximizam o desempenho dos pilotos é verdadeiramente uma demonstração de engenhosidade e habilidade."
            }
        ]
    },
    {
        enunciado: "Qual impacto você acredita que as inovações tecnológicas desenvolvidas para as 24 Horas de Le Mans têm na evolução dos carros de rua: mais influência na segurança e eficiência energética ou na performance e velocidade?",
        alternativas: [
            {
                texto: "As inovações tecnológicas desenvolvidas para as 24 Horas de Le Mans têm um impacto significativo tanto na segurança e eficiência energética quanto na performance e velocidade dos carros de rua.",
                afirmacao: "os avanços em materiais mais leves e seguros, além de sistemas de controle de tração e estabilidade, originados nas competições de resistência, têm ajudado a melhorar a segurança dos veículos de rua. Por outro lado, tecnologias como motores híbridos, aerodinâmica avançada e estratégias de gerenciamento de energia, desenvolvidas para maximizar o desempenho e a eficiência dos carros de corrida."
            },
            {
                texto: "O impacto das inovações tecnológicas das 24 Horas de Le Mans pode ser visto de duas maneiras distintas.",
                afirmacao: "Primeiramente, há uma clara influência na segurança e eficiência energética dos carros de rua, com o desenvolvimento de novos materiais, sistemas de segurança avançados e tecnologias de economia de combustível que foram inicialmente testados e refinados nas pistas de corrida. Por outro lado, a busca incessante por performance e velocidade nos protótipos de Le Mans impulsiona o desenvolvimento de motores mais potentes, aerodinâmica mais eficiente e soluções inovadoras em engenharia automotiva, que eventualmente encontram seu caminho para os carros esportivos de rua."
            }
        ]
    },
    {
        enunciado: "Qual categoria das 24 Horas de Le Mans você considera mais emocionante e por quê: os protótipos de alta tecnologia da classe LMP1 ou a competição acirrada e equilibrada dos carros de produção modificados da classe GTE?",
        alternativas: [
            {
                texto: "Eu considero os protótipos de alta tecnologia da classe LMP1 as mais emocionantes em Le Mans.",
                afirmacao: "Esses carros são verdadeiras máquinas de corrida, projetadas para alcançar velocidades impressionantes e enfrentar desafios extremos de resistência. A combinação de motores híbridos, aerodinâmica avançada e tecnologia de ponta cria um espetáculo incrível nas retas e curvas do circuito de La Sarthe."
            },
            {
                texto: "Na minha opinião, a competição acirrada e equilibrada dos carros de produção modificados da classe GTE é o que mais me atrai em Le Mans.",
                afirmacao: "Estes carros são baseados em modelos de rua, o que os torna mais próximos do que podemos ver no dia a dia, mas com modificações significativas para aumentar seu desempenho em pista. A disputa entre fabricantes renomados e equipes privadas nesta categoria é intensa, com estratégias táticas e pilotagem precisa desempenhando um papel crucial na determinação do vencedor."
            }
        ]
    },
    {
        enunciado: "Qual é a importância das 24 Horas de Le Mans para o desenvolvimento e a popularização de tecnologias sustentáveis no automobilismo: você acredita que essas inovações têm um impacto significativo no futuro dos veículos elétricos ou acredita que o foco ainda deve permanecer na eficiência dos motores de combustão? ",
        alternativas: [
            {
                texto: "As 24 Horas de Le Mans desempenham um papel crucial no avanço das tecnologias sustentáveis no automobilismo.",
                afirmacao: "A competição tem impulsionado o desenvolvimento de soluções inovadoras em eficiência energética, aerodinâmica e gerenciamento de energia, especialmente nas classes híbridas como a LMP1. Essas inovações não apenas melhoram o desempenho dos carros de corrida, mas também influenciam diretamente o futuro dos veículos elétricos e híbridos para as estradas."
            },
            {
                texto: " A competição também está começando a influenciar significativamente o desenvolvimento de tecnologias elétricas e híbridas.",
                afirmacao: "A classe LMP1, por exemplo, incorpora sistemas híbridos avançados que não só melhoram a performance dos carros, mas também servem como laboratório para futuros veículos elétricos de alto desempenho. Embora o foco atual possa estar na eficiência dos motores de combustão, é evidente que a transição para tecnologias mais sustentáveis, como os veículos elétricos, está ganhando impulso dentro do cenário das corridas de resistência. "
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
    caixaPerguntas.textContent = "Sobre Lemans...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
