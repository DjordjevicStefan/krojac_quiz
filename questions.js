function Question(text, options, answer, points, category){
  this.text = text ;
  this.options = options ;
  this.answer = answer ;
  this.points = points ;
  this.category = category ;
}

let questions = [
  new Question("Glavni grad Libije?", ["Najrobi", "Tripoli" , "Mosul", "Rabat"], "Tripoli", 10, "all"),
  new Question("Glavni grad Irana?", ["Teheran", "Kabul" , "Kinsasa", "Bejrut"], "Teheran", 10, "all"),
  new Question("KK Partizan je osvojio titulu prvaka Evrope koje god ?", ["1993", "1990" , "1992", "1991"], "1992", 10, "sport"),
  new Question("Britanska obavestajna slizba Mi6 osnovana je?", ["1918", "1943" , "1909", "1934"], "1909", 10, "all"),
  new Question("Koja reprezentacija je osvojila poslednje SP u fudbalu?", ["Belgija", "Nemacka" , "Brazil", "Francuska"], "Francuska", 10, "sport"),
  new Question("Rekordna duzina leta u ski skokovima?", ["230m", "251.5m" , "245.5m", "266.5m"], "251.5m", 10, "sport"),
  new Question("Koje jezero je najdublje na svetu?", ["Viktorijino", "Kaspijsko" , "Bajkalsko", "Tanganjika"], "Bajkalsko", 10, "all"),
  new Question("Koliko titula ima Mark Markez u motoGP-u?", ["4", "3" , "5", "6"], "5", 10, "sport"),
  new Question("WW2 je zavrsen kog datuma?", ["1.okt 1945", "2.sep 1945" , "14.okt 1945", "7.sep 1945"], "2.sep 1945", 10, "all" ),
  new Question("Ko je osnovao FK CZ?", ["'Krcun' Penezic", "aleksandar vucic" , "Brano Micunovic", "Arkan"], "'Krcun' Penezic", 10, "sport"),
] ;

let sportQuestions = questions.filter(function(sports){
  return sports.category === "sport" ;
  });

function catFilter(arg){
  if (arg == "sport") {
    return sportQuestions ;
  } ;
 if (arg=="all") {
    return questions ;
  }
}












