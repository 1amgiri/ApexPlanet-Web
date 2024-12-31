const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correct: "JavaScript",
  },
  {
    question: "Which of these is a fruit?",
    options: ["Carrot", "Apple", "Cucumber", "Spinach"],
    correct: "Apple",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(button, option);
    optionsEl.appendChild(button);
  });
  nextBtn.disabled = true;
}

function selectAnswer(button, selected) {
  const q = questions[currentQuestion];
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn) => (btn.disabled = true));

  if (selected === q.correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
    buttons.forEach((btn) => {
      if (btn.textContent === q.correct) {
        btn.classList.add("correct");
      }
    });
  }
  nextBtn.disabled = false;
}

function showResults() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your score is ${score} out of ${questions.length}`;
  resetBtn.style.display = "inline-block";
}

resetBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  resultEl.textContent = "";
  showQuestion();
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

showQuestion();

async function fetchWeather() {
  const apiKey = "4dfbbb8dd8b52b6fcc3bfc04ece13388";
  const city = "Tirupati";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod === 200) {
      document.getElementById(
        "weather"
      ).textContent = `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    } else {
      document.getElementById("weather").textContent = `Error: ${data.message}`;
    }
  } catch (error) {
    document.getElementById("weather").textContent = "Error fetching weather";
  }
}

fetchWeather();
