const form = document.querySelector("form");
const submit = document.querySelector(".submit");
const result = document.querySelector("div.hide");
let correctAnswers = ['A','A','B','C'];
let question = document.querySelectorAll(".question");
let scoreDisplay = document.querySelector(".score");

const display = ()=>{
 result.classList.remove("hide");
}
submit.onclick= display;

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let score = 0;
    const userAnswers=[form.q1.value, form.q2.value, form.q3.value, form.q4.value];

userAnswers.forEach((answer, index)=>{
    if(answer===correctAnswers[index]){
        score = score+1;
        question[index].classList.add("correct");
    }else{
        question[index].classList.add("wrong");
    }
})
scoreDisplay.textContent = `Your score is ${score}/4!`;
scrollTo(0,0);
});

