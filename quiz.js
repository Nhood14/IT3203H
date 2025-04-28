document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    let total = 5;
    let results = "";

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "correct") {
        score++;
        results += "Q1: Correct<br>";
    } else {
        results += "Q1: Wrong<br>";
    }

    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "correct") {
        score++;
        results += "Q2: Correct<br>";
    } else {
        results += "Q2: Wrong<br>";
    }

    // Question 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "correct") {
        score++;
        results += "Q3: Correct<br>";
    } else {
        results += "Q3: Wrong<br>";
    }

    // Question 4 - fill in the blank
    const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
    if (q4 === "recognize" || q4 === "identify") { // Allow either recognize or identify
        score++;
        results += "Q4: Correct<br>";
    } else {
        results += "Q4: Wrong<br>";
    }

    // Question 5 - multiple correct
    const q5Answers = document.querySelectorAll('input[name="q5"]:checked');
    let correctCount = 0;
    q5Answers.forEach(answer => {
        if (answer.value === "correct") {
            correctCount++;
        } else {
            correctCount--; // Penalize wrong selections
        }
    });
    if (correctCount === 2) { // Exactly 2 correct choices
        score++;
        results += "Q5: Correct<br>";
    } else {
        results += "Q5: Wrong<br>";
    }

    // Display the results
    let passFail = (score >= 3) ? "Passed 🎉" : "Failed 😞";
    document.getElementById('result').innerHTML = `
        <h2>Your Results:</h2>
        ${results}
        <h3>Total Score: ${score} / ${total}</h3>
        <h3>${passFail}</h3>
    `;

    // Show Restart Button
    document.getElementById('restartBtn').style.display = 'inline-block';
});

function restartQuiz() {
    window.location.reload();
}
