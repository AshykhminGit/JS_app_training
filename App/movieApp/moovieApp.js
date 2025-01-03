const numberOfFilms = prompt ( "How many moovies have you watched?");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,


}

const firstQuestion = prompt("Один из последних просмотренныъ фильмов");

const firstQuestionMark = prompt("На сколько оцениваете этот фильм");




const firstQuestion2 = prompt("Один из последних просмотренныъ фильмов");

const firstQuestionMark2 = prompt("На сколько оцениваете этот фильм");




personalMovieDB.movies[firstQuestion] =