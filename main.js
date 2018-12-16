let holder = document.querySelector('header > h2');
let optionAnswer = document.querySelectorAll('.option');
let footer = document.querySelector('footer > p');
let resolt = 0 ;


for (let i = 0; i < optionAnswer.length; i++) {
    optionAnswer[i].onclick =userAnswer ;
    
}

function startQuiz(){
 holder.innerHTML = quiz.getQuestion().text;
 let op = quiz.randomOption();
 for (let i = 0; i < 4; i++) {
    optionAnswer[i].innerHTML = op[i] ;
 };
footer.innerHTML = "pitanje " + (quiz.qNumber +1) + " od " + questions.length ;
}


startQuiz();


function userAnswer(){
  if (this.innerHTML == quiz.getQuestion().answer ) {
     resolt += quiz.getQuestion().points ;
    };

  if (quiz.qNumber !== (questions.length - 1)) {
    quiz.qNumber++ ;
    startQuiz(); 
     
  } else {
      holder.innerHTML = "osvojili ste " + resolt + " poena od " + (questions.length*10) ;
      footer.innerHTML = "osvojili ste " + resolt + " poena od " + (questions.length*10) ;
      for (let i = 0; i < 4; i++) {
        optionAnswer[i].innerHTML = "" ;
     };
  };
}
