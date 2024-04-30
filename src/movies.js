// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((e) => {
        return e.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0
    return moviesArray.filter(
        (e) => e.director === 'Steven Spielberg' && e.genre.includes('Drama')
    ).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0

    return Math.round((moviesArray.reduce((acc, movie) => {
        if (!movie.score) return acc
        return acc + movie.score
    }, 0) / moviesArray.length) * 100) / 100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter((e) =>
        e.genre.includes('Drama')
    )

    if (dramaMoviesArray.length === 0) return 0

    return Math.round((dramaMoviesArray.reduce((acc, score) => acc + score.score, 0) /
        dramaMoviesArray.length) * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
        return (a.year === b.year) ? a.title.localeCompare(b.title) : a.year - b.year
    })
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sorted = moviesArray.sort((a, b) => a.title.localeCompare(b.title))

    return sorted.slice(0,20).map(e => e.title)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.slice().map((e) => {
        let duration = e.duration.split(' ');
        let minutes = 0

        for (let part of duration) {
            if (part.includes('h')) {
                minutes += parseInt(part) * 60;
            } else if (part.includes('min')) {
                minutes += parseInt(part);
            }
        }

        e.duration = minutes
        return e
    })
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    let scoreByYear = {}

    moviesArray.forEach((e) => {
        let year = e.year
        let score = e.score

        scoreByYear[e.year] = { 
            totalScore: 0, 
            movieCount: 0 
        }

        scoreByYear[e.year].totalScore += score;



    })
    // const sortedByYear = moviesArray.sort((a, b) => {
    //     return a.year - b.year   
    // })

    // function scoresAverage(moviesArray) {
    //     return Math.round((moviesArray.reduce((acc, movie) => {
    //         if (!movie.score) return acc
    //         return acc + movie.score
    //     }, 0) / moviesArray.length) * 100) / 100
    // }


    // if (a.year !== b.year) {
    //     console.log(b.year, b.score)
        
        
    // }

    // return sortedByYear.map((e) => {
    //     const newArr = []
    //     newArr.push(e.year)

    //     return newArr
        
    // })
  

}
console.log(bestYearAvg(movies))