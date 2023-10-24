const questions = [
    {
        question: "What is the result of 5 + 7?",
        options: ["10", "12", "14", "8"],
        correctAnswer: 2
    },
    {
        question: "Simplify: 3 * (4 + 2) - 5",
        options: ["14", "13", "16", "18"],
        correctAnswer: 2
    },
    {
        question: "What is the square root of 144?",
        options: ["12", "10", "16", "14"],
        correctAnswer: 1
    },
    {
        question: "What is 25% of 80?",
        options: ["10", "15", "20", "25"],
        correctAnswer: 3
    },
    {
        question: "If x = 3 and y = 5, what is x^2 + y^2?",
        options: ["15", "20", "34", "9"],
        correctAnswer: 3
    },
    {
        question: "What is the result of 9 / 3?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2
    },
    {
        question: "Solve for x: 2x + 7 = 15",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1
    },
    {
        question: "What is the area of a rectangle with a length of 8 units and a width of 6 units?",
        options: ["42 square units", "48 square units", "54 square units", "58 square units"],
        correctAnswer: 2
    },
    {
        question: "What is the value of π (pi) to two decimal places?",
        options: ["3.12", "3.14", "3.16", "3.18"],
        correctAnswer: 2
    },
    {
        question: "If a triangle has a base of 10 units and a height of 6 units, what is its area?",
        options: ["20 square units", "30 square units", "40 square units", "50 square units"],
        correctAnswer: 2
    }
];

let currentQuestion=0;
let Score=0;

function RevealQuestion(){
    const questionElem= document.getElementById("question");
    const optionElem= document.querySelectorAll(".option");
    if(currentQuestion< questions.length){
        questionElem.textContent=questions[currentQuestion].question; //display the questions in the right place

        for(let i=0; i<4 ; i++){
            optionElem[i].textContent=questions[currentQuestion].options[i];//dispaly all the options in the right place
        }
    }
}
function checkAnswer(chosenAnswer){
    let answerIndex = questions[currentQuestion].correctAnswer;
    // is the chosen answer is the right -> result== currect answer
    if(chosenAnswer === answerIndex){
        Score++;
        document.getElementById("result").textContent="CORRECT ANSWER ✅🤩";
    }else{ //wrong answer
        document.getElementById("result").textContent="WRONG ANSWER ❌😥"
}
    //display the result after chosing an answer
    document.getElementById("result").style.display = "block"; 
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("option")[i].disabled = true;
    }
    //display the next button to get to the next question
    document.getElementById("next").style.display = "block"; 
}
function nextQuestion(){
    currentQuestion++;
    const optionsContainer = document.querySelector('.answersContainer');
    if (currentQuestion < questions.length) {
        RevealQuestion();
        document.getElementById("result").style.display = "none";
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("option")[i].disabled = false;
        }
        document.getElementById("next").style.display = "none"; //dont show the next button before choosing an answer
    }else{
        //Quizz ended display the score
        const questionElem= document.getElementById("question");
        questionElem.textContent=" ✨ YOU COMPLETED THE QUIZ ✨, YOUR SCORE IS "+ Score + "/" +currentQuestion;
        document.getElementById("result").style.display = "none";
        //Hide the options container
        optionsContainer.style.display = "none";
        document.getElementById("next").style.display = "none";

    }
    if(currentQuestion >= questions.length){
    const Restart =document.getElementById("restart").textContent= "RESTART QUIZ ↺ ";
    document.getElementById("restart").style.display = "block";
    if(Score>= (currentQuestion/2)){
        document.getElementById("nextPage").textContent= "NEXT PAGE"
        document.getElementById("nextPage").style.display = "block";
    }
     }
}
function RestartQuiz(){
    window.location.reload();
}
function NextPage(){
    const newPageURL="mainPage.html";
    window.open(newPageURL,"_self");
}

RevealQuestion();//we call this function bc it's the only one without the onclick feature