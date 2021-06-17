var divNode = document.querySelector('div');
var dugme = document.querySelector('.dugme')

var buttonClickHandler = function(){
    divNode.classList.toggle('lightcolor');
}

dugme.addEventListener('click', buttonClickHandler);

