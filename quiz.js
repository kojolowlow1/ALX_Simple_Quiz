// Function to check the selected answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Get the feedback element
    const feedback = document.getElementById("feedback");

    // Step 4: Check if user selected any answer
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting!";
        feedback.style.color = "orange";
        return;
    }

    // Step 5: Get the value of the selected answer
    const userAnswer = selectedOption.value;

    // Step 6: Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 7: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
