const flashcards = [
  { question: "¿Capital de Francia?", answer: "París" },
  { question: "¿2 + 2?", answer: "4" },
  { question: "¿Lenguaje usado en React?", answer: "JavaScript" },
  { question: "¿HTML es un lenguaje de?", answer: "Marcado" },
  { question: "¿Planeta rojo?", answer: "Marte" }
];

let currentIndex = 0;
let flipped = false;

const frontCard = document.querySelector('.flashcard.front');
const backCard = document.querySelector('.flashcard.back');
const container = document.querySelector('.flashcard-container');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

function updateFlashcard() {
  flipped = false;
  container.classList.remove('flipped');
  frontCard.textContent = flashcards[currentIndex].question;
  backCard.textContent = flashcards[currentIndex].answer;
  updateProgress();
}

function updateProgress() {
  const total = flashcards.length;
  const progressPercent = ((currentIndex + 1) / total) * 100;
  progressBar.style.width = progressPercent + '%';
  progressText.textContent = `${currentIndex + 1} / ${total} tarjetas`;
}

document.getElementById('flipBtn').addEventListener('click', () => {
  flipped = !flipped;
  container.classList.toggle('flipped');
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  updateFlashcard();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
  updateFlashcard();
});

// Inicializo
updateFlashcard();