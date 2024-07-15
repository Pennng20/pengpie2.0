function showA() {
    let questions = document.querySelectorAll(".question");
    let answers = document.querySelectorAll(".answer");

    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            answers.forEach((answer) => {
                answer.style.display = "none";
            });

            answers[index].style.display = "block";
        });
    });
}

window.onload = function() {
    showA();
};