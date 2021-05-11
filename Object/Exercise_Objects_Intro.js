//1. vCreate an object that represents your favourite coffee.
// Please include coffee name,
//strength, flavour, milk, sugar, … everything you like!

var favCoffie = {
    coffieName:"Cappuccino",
    strength:"Medium", 
    flavour:"bold coffee taste", 
    sugar:"one spoon"
};


/*
2. Create an object that represents your favourite movie.
 Please include title, actors,
director, genre, popularity.
*/

var favMovie = {
    movieName:"Taxi Driver",
    leadRole:"Robert De Niro", 
    director:"Martin Scorsese", 
    genre: "Drama",
    imdbPopularity: 8.2 ,
};

console.log(favMovie.director);

/*
3. Write a function that creates an object
 that represents a project. 
 Each project is described by: 
 description,  programming language, git repository,
 boolean status that says if the project is in development or not. 
 Add a method that prints out the project's repository, 
 a method that checks if the project
is written in JavaScript as well
 as a method that checks if the project is in development or not.
*/

function creatingObjects (a,b,c,indevelopement){
   
    var newObject={description:'',programingLanguage:'',gitRepository:'',};
        newObject.description = a;
        newObject.programingLanguage = b;
        newObject.gitRepository = c;
        if (indevelopement==="yes") {
            newObject.developementStatus = "Program is in developement"
        } else newObject.developementStatus = "Program is not in developement"
    return console.log(newObject);
}

creatingObjects("Web Site","HTML and CSS","Milojko", "yes" );

//ispravna varijanta

function createProject (desc, lang, gitUrl, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl,
        isInDev: dev,
        printRepository: function() {
            console.log(gitUrl);
        },
        isJavaScript: function () {
            return lang === 'JavaScript';    
        },
        isDevelopment: function () {
            return dev ? 'project is in development' : 'project is not in development'
        }  
    }
    return project;
}

var sveOProjektu = createProject ( 'program that calculate' , 'Java Script' , 'https://github.com/Dimitrije-Pavkovic/pp', true);
console.log(sveOProjektu);



/*
Write a function that creates an object that represents a culinary recipe.
 Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.  

*/


