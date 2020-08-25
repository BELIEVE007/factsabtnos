var input=document.getElementById("input");
var h1=document.querySelector(".display-4");
var p=document.querySelector(".lead");
var trp=document.querySelector(".trivia");
var year=document.querySelector(".year");
var number=document.querySelector(".number");
trp.addEventListener("click",fetchTrivia);
year.addEventListener("click",fetchYear);
number.addEventListener("click",fetchNumber);
 function fetchTrivia(){
	input.addEventListener("input",fetchTrivia);
	var input_value=input.value;
	try{
       fetch("http://numbersapi.com/"+input_value+"/trivia")
  .then(response=>response.text())
  .then(data=>{
  	h1.innerHTML="Trivia  :"+ input_value;
  	p.innerHTML=data;
  })
}catch{
		console.log("error");
	}
}
function fetchYear(){
	input.addEventListener("input",fetchYear);
	var input_value=input.value;
	try{
       fetch("http://numbersapi.com/"+input_value+"/year")
  .then(response=>response.text())
  .then(data=>{
  	h1.innerHTML="Year  :"+input_value;
  	p.innerHTML=data;
  })
}catch{
		console.log("error");
	}
}
function fetchNumber(){
	input.addEventListener("input",fetchNumber);
	var input_value=input.value;
	try{
       fetch("http://numbersapi.com/"+input_value+"/math")
  .then(response=>response.text())
  .then(data=>{
  	h1.innerHTML="Number  :"+input_value;
  	p.innerHTML=data;
  })
}catch{
		console.log("error");
	}
}
