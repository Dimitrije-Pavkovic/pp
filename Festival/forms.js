var createMovieBtElement = document.getElementById('create-movie-btn');
var createProgramBtElement = document.getElementById('create-program-btn');
var addMmovieBtElement = document.getElementById('addmovie-btn');
var createdMovieElementUl = document.getElementById('created-movie-here');
var uListCreatedPrograms = document.getElementById('program-list');

var selectMovielist = document.getElementById('movie-dropdown-list');
var selectProgramList = document.getElementById('program-dropdown-list');

// funkcija za kreiranje filma
// function for creating a Movie

function createMovie () {
    var movieTitle = document.getElementById('movie-title').value;
    var movieLength = document.getElementById('movie-length').value;
    var movieGenre = document.getElementById('genre').value;

    var movieObject = new Movie(movieTitle, movieGenre, movieLength);

    var createdMovieLi = document.createElement('li'); //stvaramo li objekat
    //dajemo mu neku vrednost
    createdMovieLi.textContent = movieObject.getData();
    //hvatamo vrednost, dodaj dete nekom, dodaj li za ul
    createdMovieElementUl.appendChild(createdMovieLi);



    console.log(movieObject.getData());

}

createMovieBtElement.addEventListener('click', createMovie );