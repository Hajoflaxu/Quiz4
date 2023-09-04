var questoes = [
  {
    pergunta: "Qual é o formula química do oxigênio?",
    respCorreta: "O2",
    altErrada: ["H2O", "CO2", "N2", "Fe4", "NaCl"],
  },
  {
    pergunta: "Quem escreveu a famosa peça 'Romeu e Julieta'?",
    respCorreta: "William Shakespeare",
    altErrada: ["Charles Dickens", "Jane Austen", "Mark Twain", "J. R. R. Tolkien", "J. K. Rowling"],
  },
  {
    pergunta: "Qual é a capital da França?",
    respCorreta: "Paris",
    altErrada: ["Londres", "Roma", "Madrid"," Oslo", "Estocolmo"],
  },
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    respCorreta: "Mercúrio",
    altErrada: ["Vênus", "Terra", "Marte", "Plutão", "Jupiter"],
  },
  {
    pergunta: "Qual é o maior órgão do corpo humano?",
    respCorreta: "A pele",
    altErrada: ["O coração", "Os pulmões", "O fígado", "O Estômago", "Pâncreas "],
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respCorreta: "Leonardo da Vinci",
    altErrada: ["Pablo Picasso", "Vincent van Gogh", "Michelangelo", "Donatello", "Rafael Sanzio"],
  },
  {
    pergunta: "Qual é o maior continente do mundo?",
    respCorreta: "Ásia",
    altErrada: ["América do Norte", "Europa", "África", "Oceania", "Antartica"],
  },
  {
    pergunta: "Qual é a fórmula química da água?",
    respCorreta: "H2O",
    altErrada: ["CO2", "O2", "NH3", "Fe4", "NaCl"],
  },
  {
    pergunta: "Quem escreveu 'A Odisséia'?",
    respCorreta: "Homero",
    altErrada: ["Virgílio", "Sófocles", "Eurípides", "Platão", "Aristófanes"],
  },
  {
    pergunta: "Qual é a maior montanha do mundo?",
    respCorreta: "Monte Everest",
    altErrada: ["Monte Kilimanjaro", "Monte McKinley", "Monte Fuji", "Corcovado"],
  },
  {
    pergunta: "Quem foi o primeiro homem a pisar na Lua?",
    respCorreta: "Neil Armstrong",
    altErrada: ["Buzz Aldrin", "Yuri Gagarin", "John Glenn", "Michael Collins", "Sergei Krikalev"],
  },
  {
    pergunta: "Qual é o maior planeta do sistema solar?",
    respCorreta: "Júpiter",
    altErrada: ["Saturno", "Marte", "Vênus", "Terra", "Plutão"],
  },
  {
    pergunta: "Quem foi o autor da famosa obra 'Dom Quixote'?",
    respCorreta: "Miguel de Cervantes",
    altErrada: ["William Shakespeare", "Leo Tolstoy", "Fyodor Dostoevsky", "Homero","Eiichiro Oda"],
  },
  {
    pergunta: "Qual é o maior oceano do mundo?",
    respCorreta: "Oceano Pacífico",
    altErrada: ["Oceano Atlântico", "Oceano Índico", "Mar Mediterrâneo","Oceano Artico", "Oceano Antártico"],
  },
  {
    pergunta: "Quem é considerado o pai da filosofia ocidental?",
    respCorreta: "Sócrates",
    altErrada: ["Aristóteles", "Platão", "Confúcio", "Sófocles", "Eurípides",],
  },
  {
    pergunta: "Em que ano a Primeira Guerra Mundial começou?",
    respCorreta: "1914",
    altErrada: ["1918", "1939", "1945", "1837", "2006"],
  },
  {
    pergunta: "Qual é o segundo maior deserto do mundo?",
    respCorreta: "Deserto ",
    altErrada: ["Deserto de Atacama", "Deserto de Kalahari", "Deserto de Gobi", "Antartica", "Grande Deserto Australiano"],
  },
  {
    pergunta: "Quem foi o fundador da Apple Inc.?",
    respCorreta: "Steve Jobs",
    altErrada: ["Bill Gates", "Mark Zuckerberg", "Elon Musk", "Jeff Bezos", "Governo Da China"]
  },
  {
    pergunta: "Qual é o número atômico do hidrogênio?",
    respCorreta: "1",
    altErrada: ["14", "8", "10", "2", "3"],
  },
  {
    pergunta: "Qual é o país mais populoso do mundo?",
    respCorreta: "China",
    altErrada: ["Índia", "Estados Unidos", "Rússia", "Brasil", "Canadá"],
  },
  {
    pergunta: "Quem é conhecido como o pai da psicanálise?",
    respCorreta: "Sigmund Freud",
    altErrada: ["Carl Jung", "Ivan Pavlov", "B.F. Skinner", "Carl Jung", "Gengis Khan"],
  },
  {
    pergunta: "Qual é o símbolo químico do cobre?",
    respCorreta: "Cu",
    altErrada: ["He", "O", "N", "Au", "Co"],
  },
  {
    pergunta: "Quem é o autor da obra '1984'?",
    respCorreta: "George Orwell",
    altErrada: ["Aldous Huxley", "Ray Bradbury", "F. Scott Fitzgerald", "J. R. R. Tolkien", "J. K. Rowling"],
  },
  {
    pergunta: "Em que ano a Torre Eiffel foi construída?",
    respCorreta: "1889",
    altErrada: ["1901", "1923", "1956", "1945", "1898"],
  },
  {
    pergunta: "Qual é o maior animal terrestre do mundo?",
    respCorreta: "Elefante Africano",
    altErrada: ["Girafa", "Rinoceronte", "Hipopótamo", "Elefante Asiático", "Python"],
  }
];
function embaralharAlt(pergunta) {
  var alternativas = pergunta.altErrada.slice();
  alternativas.push(pergunta.respCorreta);

  for (let i = alternativas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
  }
  return alternativas;
}

function embaralharPerg(questoes) {
  for (let i = questoes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questoes[i], questoes[j]] = [questoes[j], questoes[i]];
  }
}
var questoesResp = 0;
var Pontos = 0;

function mostrarPerg() {
  if (questoesResp === 10) {
    window.location.href = "fim.html";
    return;
  }

  var pergAtual = questoes[questoesResp];
  var alt_Embaralhada = embaralharAlt(pergAtual);

  document.getElementById("perguntaTexto").textContent = pergAtual.pergunta;
  document.getElementById("numeroPergunta").textContent = "Pergunta " + (questoesResp + 1);
  document.getElementById("alternativaA").textContent = alt_Embaralhada[0];
  document.getElementById("alternativaB").textContent = alt_Embaralhada[1];
  document.getElementById("alternativaC").textContent = alt_Embaralhada[2];
  document.getElementById("alternativaD").textContent = alt_Embaralhada[3];
}

function VerificarResp(resposta) {
  var pergAtual = questoes[questoesResp];
  var respCorreta = pergAtual.respCorreta;
  if (resposta !== respCorreta) {
    alert("Você errou!");
    window.location.reload();

    return;
  }
  questoesResp++;
  mostrarPerg();
}

embaralharPerg(questoes);
mostrarPerg();
