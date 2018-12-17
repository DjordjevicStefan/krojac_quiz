
let quiz ;

function quizSelect(test){
 
  function Quiz(quest){
    this.points = 0;
    this.questions = quest ;
    this.qNumber = 0 ;
}

Quiz.prototype.getQuestion = function(){
 return this.questions[this.qNumber];
  }

Quiz.prototype.randomOption = function(){
    let qArrey = [].concat(quiz.getQuestion().options);
    let randomArrey = [];
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * qArrey.length);
    let qc = qArrey[random]  ;
     randomArrey.push(qc); 
     qArrey.splice(random,1);
  }
  return randomArrey ;
}

quiz = new Quiz(test) ;

}


