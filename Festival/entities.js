function Movie (title, genre, length){
    this.title = title;
    this.genreShort = genre.charAt(0).toUpperCase() + genre.charAt(genre.legth-1).toUpperCase();
    this.length = length;
    this.getData = function (){ //ovo nam ubacuje podatkeu liniju u html-u
        return this.title + ', ' + this.length + ' min, ' + this.genreShort;
    }
}

