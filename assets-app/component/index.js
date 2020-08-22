//DOM - Crear e insertar elementos

/*
    Crear un elemento: document.creatElement(element)
    Escribir texto en un elemento: element.textContent = texto
    Escribir HTML en un elemento: element.innerHTML = código HTML

    Añadir un elemento al DOM: parent.appendChild(element)

    Fragmentos de código: document.createDocumentFragment()
    
*/


//=========HEADER=========
const header = document.getElementById('header');

header.innerHTML = '<h1 class="title"> Welcome </h1>'


//=========MAIN=========
const main = document.getElementById('main');

main.innerHTML = '<div class="btn-app" title="NO!!" id="btn"> DANGER! </div>' 
+
'<div class="animation" id="margin"></div>'
+
'<div class="img-box" id="pop-up-tab"><div class="box-close" id="icon"><img class="btn-close" src="./assets-app/img/close.png" alt="Close"></div><img class="conejo" src="./assets-app/img/conejo-equisde.jpg" alt="XD"></div>'


//=========FOOTER=========
const footer = document.getElementById("footer")

footer.innerHTML = '<div class="copy">&copy; 2020 by Dhanys - app.js </div>' 
+ 
'<div class="github"> <a href="https://github.com/DhanysLopez" target="_blank" rel="noopener noreferrer"> <img src="./assets-app/img/github.svg" alt="github"> </a> </div>'