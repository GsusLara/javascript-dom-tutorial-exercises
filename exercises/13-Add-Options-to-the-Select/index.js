window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let lista = document.querySelector("#mySelect");
	countries.forEach(pais => {
		let nuevo = document.createElement("option");
		nuevo.innerHTML = pais;
		nuevo.value = pais;
		lista.appendChild(nuevo);
	});

	document.addEventListener("change", function() {
		alert(lista.value);
	});
};
