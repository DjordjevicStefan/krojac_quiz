let holder = document.querySelector('header > h2');
let optionAnswer = document.querySelectorAll('.option');
let footer = document.querySelector('footer > p');
let main = document.querySelector('main');
let all = document.querySelector('.all');
let sport = document.querySelector('.sport');
let resolt = 0 ;

all.onclick = startQuizAll;

function startQuizAll(){
    quizSelect(catFilter("all"));
    startQuiz();
    sport.onclick = function() {
        return false;
};
all.onclick = function() {
    return false;
};
}

sport.onclick = startQuizSport;

function startQuizSport(){
    quizSelect(catFilter("sport"));
    startQuiz();
    all.onclick = function() {
        return false;
};
sport.onclick = function() {
    return false;
};
}



function addButton(opt){
let x = opt;
if (opt == "all" ) {
    for (let i = 0; i < 4; i++) {
        optionAnswer[i].onclick = userAnswer ;
    };
} else{
    for (let i = 0; i < 4; i++) {
        optionAnswer[i].onclick = function() {
            return false;
    };
  }
}
};


function startQuiz(){
    addButton("all");
    holder.innerHTML = quiz.getQuestion().text;
   let op = quiz.randomOption();
   for (let i = 0; i < 4; i++) {
    optionAnswer[i].innerHTML = op[i] ;
   };
footer.innerHTML = "pitanje " + (quiz.qNumber +1) + " od " + quiz.questions.length ;
}

function userAnswer(){
  if (this.innerHTML == quiz.getQuestion().answer ) {
     resolt += quiz.getQuestion().points ;
     this.style.background = "lightgreen" ;
    } else{
        this.style.background = "red" ;
    };

  if (quiz.qNumber !== (quiz.questions.length - 1)) {
      addButton("r");
    quiz.qNumber++ ;
    setTimeout(() => {
        this.style.background = "white" ;
        startQuiz(); 
    }, 1300);
     
  } else {
    
      setTimeout(() => {
        holder.innerHTML = "osvojili ste " + resolt + " poena od " + (quiz.questions.length*10) ;
        footer.innerHTML = "osvojili ste " + resolt + " poena od " + (quiz.questions.length*10) ;
        main.setAttribute("style", "font-size:100px");
        main.innerHTML = ":)"  ;
      }, 1300);
      
  };
}

