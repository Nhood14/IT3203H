function checkAnswers() {
  let score = 0;

  // Question 1: What is a session cookie?
  if (document.querySelector('input[name="q1"]:checked')?.value === 'b') {
    score++;
  }

  // Question 2: Which of the following is not a type of cookie?
  if (document.querySelector('input[name="q2"]:checked')?.value === 'c') {
    score++;
  }

  // Question 3: What do persistent cookies do?
  if (document.querySelector('input[name="q3"]:checked')?.value === 'b') {
    score++;
  }

  // Question 4: Fill in the blank (Third-party cookies are used for...)
  const q4Answer = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
  if (q4Answer === 'tracking') {
    score++;
  }

  // Question 5: Which of the following are used for tracking users across websites?
  const q5Answers = document.querySelectorAll('input[name="q5"]:checked');
  const correctAnswers = ['c']; // Third-Party Cookies
  let correctCount = 0;
  q5Answers.forEach(answer => {
    if (correctAnswers.includes(answer.value)) {
      correctCount++;
    }
  });
  if (correctCount === correctAnswers.length) {
    score++;
  }

  // Display the result
  const totalQuestions = 5;
  const resultMessage = score >= 4 ? 'You passed the quiz!' : 'You failed the quiz, try again.';
  document.getElementById('score').textContent = `${score} out of ${totalQuestions}`;
  document.getElementById('resultMessage').textContent = resultMessage;
  document.getElementById('result').style.display = 'block';
}

function restartQuiz() {
  document.getElementById('quizForm').reset();
  document.getElementById('result').style.display = 'none';
}
