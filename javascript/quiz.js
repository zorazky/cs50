const questions = [
    {
        question: "What is 10 + 10",
        options: ["8","20","28","30"],
        answer: "20"
    },
    {
        question: "What is Athena's favorite animal?",
        options: ["jellyfish", "penguins","otters"],
        answer: "otters"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {

        if (question_number === questions.length) {
            document.querySelector("body").innerHTML = "";
            document.querySelector("body").innerHTML = `<h1>GAME OVER</h1>`;
            document.querySelector("body").innerHTML += `<h2>${correct} answers correct of ${questions.length}</h2>`
            
        } else {
            document.querySelector("#question").innerHTML = questions[question_number].question;
            const options = document.querySelector("#options");
            options.innerHTML = "";
            for (const option of questions[question_number].options) {
                options.innerHTML += `<button class="option">${option}</button>`;
            }

            document.querySelectorAll(".option").forEach(option => {
                option.onclick = () => {
                    
                    if (option.textContent === questions[question_number].answer) {
                        correct++
                        document.querySelector("#correct").innerHTML = `${correct} of ${questions.length}`
                    }
                    question_number++;
                    load_question();
                }
            })

        }
       
}