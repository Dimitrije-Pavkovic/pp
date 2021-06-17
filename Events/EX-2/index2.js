
//gadjam div
var divNode = document.querySelector('div');
//gadjam prvo dugme
var dugme = document.querySelector('.dugme')


//pravim funkciju ya promenu pozadine
var buttonClickHandler = function(){
    divNode.classList.toggle('lightcolor');
}

dugme.addEventListener('click', buttonClickHandler);


// hvatamo drugo dugme
var dugme2 = document.querySelector('.dugme2');
// pravim funkciju da ugasim event listener prvog dugmeta
var timeOutHandler = function (){
    dugme.removeEventListener('click', buttonClickHandler)
}
//pravim event listener za drugo dugme
dugme2.addEventListener('click', timeOutHandler);
