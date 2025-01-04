const questions = [
    {
        category: "Math",
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        answer: "4"
    },
    {
        category: "Science",
        question: "What planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter"],
        answer: "Mars"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        category: "Literature",
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "F. Scott Fitzgerald"],
        answer: "Harper Lee"
    },
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Rome", "Paris", "Berlin"],
        answer: "Paris"
    }
];

function getRandomQuestion(){
const randomIndex = Math.floor(Math.random() * questions.length)
return questions[randomIndex]
}

function getRandomComputerChoice(choices){
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}
function getResults(selectedQuestion, computerChoice) {
    if (computerChoice === selectedQuestion.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`;
    }
}
