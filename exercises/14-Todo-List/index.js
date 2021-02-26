// Your code here
let borrar = document.querySelector("#mylist");
borrar.addEventListener("click", function(e) {
	this.removeChild(e.target);
});
let agregar = document.querySelector("#addToDo");
agregar.addEventListener("keypress", function(e) {
	if (e.key === "Enter") {
		let palabra = document.createElement("li");
		palabra.innerHTML = '<span><i class="fa fa-trash"></i></span>' + e.currentTarget.value;
		borrar.appendChild(palabra);
	}
});
