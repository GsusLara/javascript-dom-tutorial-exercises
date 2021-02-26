var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above
var tex = document.createElement("p");
tex.innerHTML = "texto contenido en la etiqueta p";
tex.style.background = "yellow";
document.querySelector("#myDiv").appendChild(tex);
