const numberOfFilms = prompt ( "Сколько фильмов ты посмотрел");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false,


}

const firstQuestion = prompt("Один из последних просмотренных фильмов");

const firstQuestionMark = prompt("На сколько оцениваете этот фильм");

const firstQuestion2 = prompt("Один из последних просмотренных  фильмов");

const firstQuestionMark2 = prompt("На сколько оцениваете этот фильм");


personalMovieDB.movies[firstQuestion] = firstQuestionMark; 
personalMovieDB.movies[firstQuestion2] = firstQuestionMark2;

console.log(personalMovieDB);
alert(personalMovieDB);