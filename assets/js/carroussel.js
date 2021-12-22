let lone = document.getElementById("left-1");
let ltwo = document.getElementById("left-2");
let rone = document.getElementById("right-1");
let rtwo = document.getElementById("right-2");

let card1 = document.getElementById("card-1");
let card2 = document.getElementById("card-2");
let card3 = document.getElementById("card-3");
	
rone.addEventListener("click", function hide_one() {
	return [rone.style.display = "none", card1.style.opacity = 0, ltwo.style.display = "flex"];
});

rtwo.addEventListener("click", function hide_two() {
	return [rtwo.style.display = "none", card2.style.opacity = 0, lone.style.display = "flex"];
})
	
lone.addEventListener("click", function hide_three() {
	return [lone.style.display = "none", card3.style.opacity = 0, ltwo.style.display = "flex", card2.style.opacity = 1, rtwo.style.display = "flex"];
})

ltwo.addEventListener("click", function hide_four() {
	return [ltwo.style.display = "none", card2.style.opacity = 0, rone.style.display = "flex", card1.style.opacity = 1];
})


//
let edad = prompt("¿Qué edad tenés?");

if (edad => 18){
	alert("Bienvenido");
}

else {
	alert("No tenés la edad mínima necesaria para entrar a este sitio.");
}
var suscribed = document.getElementById("newsletter");
suscribed.addEventLister("click", function suscrito(){
	alert("¡Te has suscrito correctamente!");
	});