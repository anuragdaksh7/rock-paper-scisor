body = document.querySelector("body");
url = 'https://source.unsplash.com/'+String(window.innerWidth)+"x"+String(window.innerHeight)+'/?game'
body.style.backgroundImage = "url("+url+")"

min = 1;
max = 3;

function conv(a){
  if (a == 1){
    return "rock";
  }
  if (a==2){
    return "paper";
  }
  if (a==3 ){
    return "scisor";
  }
}

function rng(){
  min = 1;
  max = 3;
	return Math.floor(Math.random() * (max - min)) + min;
}

function check(p1,p2){
  if (p1 == "rock" && p2 == "paper" || p2 == "rock" && p1 == "paper"){
    alert("paper wins");
    return;
  }
  if (p1 == "paper" && p2 == "scisor" || p2 == "paper" && p1 == "scisor"){
    alert("scisor wins");
    return;
  }
  if (p1 == "scisor" && p2 == "rock" || p2 == "scisor" && p1 == "rock"){
    alert("rock wins");
    return;
  }
  alert("draw");

}

function r(){
	check("rock",conv(rng()));
}
function p(){
  check("paper",conv(rng()));
}
function s(){
  check("scisor",conv(rng()));
}
