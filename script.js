const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', ''); // Создаем переменную, результат которой пойдет в объект 'personalMovieDB', ключу 'count'.

personalMovieDB = {
    count: numberOfFilms, // Сюда присвоится результат ответа пользователя на вопрос в окне
    movies: {}, // в этот объект пойдут другие ответы переменных 'a, b, c, d'
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''), // Создали переменные с вопросами, которые передадутся как ключ = значение в объект 'movies'
          b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b; // Указываем путь к переменным, чтобы получить результат вопроса и ответа пользователя. 
        console.log('done');
    } else {
        console.log('error');
        i--
    }   
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB); // выводим результат в консоль, чтобы видеть результат задачи и ответов пользователя.