//animation
const btnApp = document.getElementById('btn');
const margin = document.getElementById('margin');

btnApp.addEventListener("mouseover", function () {
    margin.classList.add('active')
});

btnApp.addEventListener('mouseleave', function () {
    margin.classList.remove('active')
});

//btn
const newTab = document.getElementById('pop-up-tab')

btnApp.addEventListener('click', function(){
    newTab.classList.add('show')
});

//btn-close
const btnClose = document.getElementById('icon')

btnClose.addEventListener('click', function(){
    newTab.classList.remove('show')
});