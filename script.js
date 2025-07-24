const reasons = [
  "Your laugh is my favorite 😊",
  "You make my life better",
  "You inspire me every day",
  "I love your kindness",
  "You're my Dream Wife",
  "You make me feel safe",
  "You’re beautiful inside and out",
  "I love doing life with you"
];

let currentIndex = 0;
const reasonEl = document.getElementById('reason');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressEl = document.getElementById('progress');

function updateUI() {
  reasonEl.classList.remove('fade-in');
  reasonEl.classList.add('fade-out');
  setTimeout(() => {
    reasonEl.textContent = reasons[currentIndex];
    progressEl.textContent = `${currentIndex + 1} / ${reasons.length}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === reasons.length - 1;
    reasonEl.classList.remove('fade-out');
    reasonEl.classList.add('fade-in');
  }, 300);
}

prevBtn.onclick = () => {
  if (currentIndex > 0) { currentIndex--; updateUI(); }
};
nextBtn.onclick = () => {
  if (currentIndex < reasons.length - 1) { currentIndex++; updateUI(); }
};

// Initialize
updateUI();
