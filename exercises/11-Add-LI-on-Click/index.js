let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let lugar = document.querySelector("#myList");
	let nuevoli = document.createElement("li");
	nuevoli.innerHTML = "Fourth element";
	lugar.appendChild(nuevoli);
});
