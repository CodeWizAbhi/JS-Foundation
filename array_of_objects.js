const quiz = [
    {
        question: "What is the capital city of India?",
        options: ["A. Mumbai", "B. Kolkata", "C. New Delhi", "D. Chennai"],
        answer: "c"
    },
    {
        question: "What is the national flower of India?",
        options: ["A. Rose", "B. Sunflower", "C. Lotus", "D. Marigold"],
        answer: "c"
    },
    {
        question: "Who was the first Prime Minister of independent India?",
        options: ["A. Mahatma Gandhi", "B. Jawaharlal Nehru", "C. Sardar Vallabhbhai Patel", "D. Subhas Chandra Bose"],
        answer: "b"
    },
    {
        question: "In which year did India gain independence?",
        options: ["A. 1945", "B. 1946", "C. 1947", "D. 1950"],
        answer: "c"
    }
];

let marks = 0;

for (let i = 0; i < quiz.length; i++) {
    let q = quiz[i];
    let userAnswer = prompt(`${i + 1}. ${q.question}\n${q.options.join('\n')}\nEnter your answer (a/b/c/d):`);
    
    if (userAnswer && userAnswer.toLowerCase() === q.answer) {
        marks++;
    }
}

alert(`Your Result: ${(marks / quiz.length) * 100}%`);
