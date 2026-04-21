const questions = [
  {
    question: "Quel langage s'exécute dans le navigateur ?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "JavaScript", correct: true },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "Quelle méthode permet de sélectionner un élément ?",
    answers: [
      { text: "querySelector", correct: true },
      { text: "getElementByClass", correct: false },
      { text: "selectNode", correct: false },
      { text: "findElement", correct: false }
    ]
  },
  {
    question: "Que signifie DOM ?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Digital Ordinance Model", correct: false },
      { text: "Desktop Object Manager", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionEl.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answersEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(button, correct) {
  if (correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
  }

  Array.from(answersEl.children).forEach(btn => {
    btn.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionEl.innerText = "Quiz terminé 🎉";
  scoreEl.classList.remove("hidden");
  scoreEl.innerText = `Score: ${score} / ${questions.length}`;
}

showQuestion();