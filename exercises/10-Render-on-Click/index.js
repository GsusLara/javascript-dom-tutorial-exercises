let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var caja = document.createElement("div");
	caja.innerHTML = "Hello World";
	caja.style.background = "yellow";
	document.body.appendChild(caja);
});
