var fluteScore = 0;
var trumpetScore = 0;
var violinScore = 0;
var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", flute);
q1a1.addEventListener("click", disQ1);
q1a2.addEventListener("click", trumpet);
q1a2.addEventListener("click", disQ1);
q1a3.addEventListener("click", violin);
q1a3.addEventListener("click", disQ1);
q2a1.addEventListener("click", violin);
q2a1.addEventListener("click", disQ2);
q2a2.addEventListener("click", trumpet);
q2a2.addEventListener("click", disQ2);
q2a3.addEventListener("click", flute);
q2a3.addEventListener("click", disQ2);
q3a1.addEventListener("click", trumpet);
q3a1.addEventListener("click", disQ3);
q3a2.addEventListener("click", violin);
q3a2.addEventListener("click", disQ3);
q3a3.addEventListener("click", flute);
q3a3.addEventListener("click", disQ3);
q4a1.addEventListener("click", violin);
q4a1.addEventListener("click", disQ4);
q4a2.addEventListener("click", flute);
q4a2.addEventListener("click", disQ4);
q4a3.addEventListener("click", trumpet);
q4a3.addEventListener("click", disQ4);
q5a1.addEventListener("click", flute);
q5a1.addEventListener("click", disQ5);
q5a2.addEventListener("click", violin);
q5a2.addEventListener("click", disQ5);
q5a3.addEventListener("click", trumpet);
q5a3.addEventListener("click", disQ5);
restart.addEventListener("click", restartQuiz);

function flute(){
  fluteScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "fluteScore = " + fluteScore);
  if (questionCount == 5){
    console.log ("The quiz is done!");
    updateResults();
  }
}

function trumpet(){
  trumpetScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "trumpetScore = " + trumpetScore);
  if (questionCount == 5){
    console.log ("The quiz is done!");
    updateResults();
  }
}

function violin(){
  violinScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "violinScore = " + violinScore);
  if (questionCount == 5){
    console.log ("The quiz is done!");
    updateResults();
  }
}

function updateResults(){
  if (fluteScore >= trumpetScore && fluteScore >= violinScore) {
    result.innerHTML = "A flute!"
    console.log("The instrument which matches your personality best is a flute!");
  }

  else if (trumpetScore >= fluteScore && trumpetScore >= violinScore){
    result.innerHTML = "A trumpet!"
    console.log("The instrument which matches your personality best is a trumpet!");
  }

  else if (violinScore >= fluteScore && violinScore >= trumpetScore){
    result.innerHTML = "A violin!"
    console.log("The instrument which matches your personality best is a violin!");
  }
}

function restartQuiz(){
  window.scrollBy(0, -2000)
  result.innerHTML = "___________"
  fluteScore = 0;
  trumpetScore = 0;
  violinScore = 0;
  questionCount = 0;
  document.getElementById("q1a1").style.opacity = "1.0";
  document.getElementById("q1a1").style.cursor = "pointer";
  document.getElementById("q1a2").style.opacity = "2.0";
  document.getElementById("q1a2").style.cursor = "pointer";
  document.getElementById("q1a3").style.opacity = "1.0";
  document.getElementById("q1a3").style.cursor = "pointer";
  document.getElementById("q2a1").style.opacity = "1.0";
  document.getElementById("q2a1").style.cursor = "pointer";
  document.getElementById("q2a2").style.opacity = "1.0";
  document.getElementById("q2a2").style.cursor = "pointer";
  document.getElementById("q2a3").style.opacity = "1.0";
  document.getElementById("q2a3").style.cursor = "pointer";
  document.getElementById("q3a1").style.opacity = "1.0";
  document.getElementById("q3a1").style.cursor = "pointer";
  document.getElementById("q3a2").style.opacity = "1.0";
  document.getElementById("q3a2").style.cursor = "pointer";
  document.getElementById("q3a3").style.opacity = "1.0";
  document.getElementById("q3a3").style.cursor = "pointer";
  document.getElementById("q4a1").style.opacity = "1.0";
  document.getElementById("q4a1").style.cursor = "pointer";
  document.getElementById("q4a2").style.opacity = "1.0";
  document.getElementById("q4a2").style.cursor = "pointer";
  document.getElementById("q4a3").style.opacity = "1.0";
  document.getElementById("q4a3").style.cursor = "pointer";
  document.getElementById("q5a1").style.opacity = "1.0";
  document.getElementById("q5a1").style.cursor = "pointer";
  document.getElementById("q5a2").style.opacity = "1.0";
  document.getElementById("q5a2").style.cursor = "pointer";
  document.getElementById("q5a3").style.opacity = "1.0";
  document.getElementById("q5a3").style.cursor = "pointer";
}


function disQ1(){
  document.getElementById("q1a1").style.opacity = "0.6";
  document.getElementById("q1a1").style.cursor = "not-allowed";
  document.getElementById("q1a2").style.opacity = "0.6";
  document.getElementById("q1a2").style.cursor = "not-allowed";
  document.getElementById("q1a3").style.opacity = "0.6";
  document.getElementById("q1a3").style.cursor = "not-allowed";
  window.scrollBy(0,350);
}

function disQ2(){
  document.getElementById("q2a1").style.opacity = "0.6";
  document.getElementById("q2a1").style.cursor = "not-allowed";
  document.getElementById("q2a2").style.opacity = "0.6";
  document.getElementById("q2a2").style.cursor = "not-allowed";
  document.getElementById("q2a3").style.opacity = "0.6";
  document.getElementById("q2a3").style.cursor = "not-allowed";
  window.scrollBy(0, 350);
}

function disQ3(){
  document.getElementById("q3a1").style.opacity = "0.6";
  document.getElementById("q3a1").style.cursor = "not-allowed";
  document.getElementById("q3a2").style.opacity = "0.6";
  document.getElementById("q3a2").style.cursor = "not-allowed";
  document.getElementById("q3a3").style.opacity = "0.6";
  document.getElementById("q3a3").style.cursor = "not-allowed";
  window.scrollBy(0, 350);
}

function disQ4(){
  document.getElementById("q4a1").style.opacity = "0.6";
  document.getElementById("q4a1").style.cursor = "not-allowed";
  document.getElementById("q4a2").style.opacity = "0.6";
  document.getElementById("q4a2").style.cursor = "not-allowed";
  document.getElementById("q4a3").style.opacity = "0.6";
  document.getElementById("q4a3").style.cursor = "not-allowed";
  window.scrollBy(0, 350);
}

function disQ5(){
  document.getElementById("q5a1").style.opacity = "0.6";
  document.getElementById("q5a1").style.cursor = "not-allowed";
  document.getElementById("q5a2").style.opacity = "0.6";
  document.getElementById("q5a2").style.cursor = "not-allowed";
  document.getElementById("q5a3").style.opacity = "0.6";
  document.getElementById("q5a3").style.cursor = "not-allowed";
  window.scrollBy(0, 400);
}
