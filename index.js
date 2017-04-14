var num1;
var num2;
var res;
var results;

document.addEventListener("DOMContentLoaded", function(){
	num1 = document.getElementById("num1");
	num2 = document.getElementById("num2");
	res = document.getElementById("results");

});

function add(){
	results= +num1.value + +num2.value;
	res.value= results;
}

function subtract(){
	results= +num1.value - +num2.value;
	res.value= results;
}

function multiply(){
	results= +num1.value * +num2.value;
	res.value= results;
}

function divide(){
	results= +num1.value / +num2.value;
	res.value= results;
}

