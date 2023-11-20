//STEP 1
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira"]
// console.log(favoriteMovies[1])

//STEP 2
// const movies = (movies) => {
//     let favMovies = new Array(5)
//     console.log(favMovies)
//     console.log(favMovies.length)
//     for (let i = 0; i < movies.length; i++) {
//         favMovies[i] = movies[i]
//     }
//     console.log(favMovies)
//     console.log(favMovies[0])
// }
// movies(favoriteMovies)

//STEP 3
// const movies = (movies) => {
//     let favMovies = new Array(5)
//     console.log(favMovies)
//     console.log(favMovies.length)
//     movies.splice(2,0,"Jurassic Park")
//     for (let i = 0; i < movies.length; i++) {
//         favMovies[i] = movies[i]
//     }
//     console.log(favMovies)
//     console.log(favMovies.length)
// }
// movies(favoriteMovies)

//STEP 4
// const movies = (movies) => {
//     let favMovies = new Array(5)
//     console.log(favMovies)
//     console.log(favMovies.length)
//     movies.splice(2,0,"Jurassic Park")
//     for (let i = 0; i < movies.length; i++) {
//         favMovies[i] = movies[i]
//     }
//     console.log(favMovies)
//     console.log(favMovies.length)
//     let newMovieList = favMovies.shift()
//     console.log(newMovieList)
//     console.log(favMovies)
//     console.log(favMovies.length)
// }
// movies(favoriteMovies)

//STEP 5
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// const movies = () => {
//     let favMovies = new Array(7)
//     console.log(favMovies)
//     console.log(favMovies.length)
//     for (let i = 0; i < favoriteMovies.length; i++) {
//         favMovies[i] = favoriteMovies[i]
//     }
//     console.log(favMovies)
//     console.log(favMovies.length)
//     for (const movie in favMovies) {
//         console.log(`${favMovies[movie]}`)
//     }
// }
// movies()

//STEP 6
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// const movies = () => {
//     let favMovies = new Array(7)
//     console.log(favMovies)
//     console.log(favMovies.length)
//     for (let i = 0; i < favoriteMovies.length; i++) {
//         favMovies[i] = favoriteMovies[i]
//     }
//     console.log(favMovies)
//     console.log(favMovies.length)
//     for (const movie of favMovies) {
//         console.log(movie)
//     }
// }
// movies()

//STEP 7
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// const movies = () => {
//     favoriteMovies.sort()
//     console.log(favoriteMovies);
// }
// movies()

//STEP 8
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// let leastLikedMovies = ["Pokemon The Movie 2000","Leprechaun 5: In The Hood","Tenant"]
// const favMovies = () => {
//     console.log(`\nMovies I like:\n\n`)
//     for (const movie of favoriteMovies) {
//         console.log(movie)
//     }
// }
// const unFavMovies = () => {
//     console.log(`\nMovies I regert watching:\n\n`)
//     for (const movie of leastLikedMovies) {
//         console.log(movie)
//     }
// }
// favMovies()
// unFavMovies()

//STEP 9
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// let leastLikedMovies = ["Pokemon The Movie 2000","Leprechaun 5: In The Hood","Tenant"]
// let movies = favoriteMovies.concat(leastLikedMovies)
// console.log(movies.reverse())

//STEP 10
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// let leastLikedMovies = ["Pokemon The Movie 2000","Leprechaun 5: In The Hood","Tenant"]
// let movies = favoriteMovies.concat(leastLikedMovies)
// let moviesReversed = movies.reverse()
// let lastMovie = moviesReversed[moviesReversed.length-1]
// console.log(lastMovie)

//STEP 11
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// let leastLikedMovies = ["Pokemon The Movie 2000","Leprechaun 5: In The Hood","Tenant"]
// let movies = favoriteMovies.concat(leastLikedMovies)
// let moviesReversed = movies.reverse()
// console.log(moviesReversed[0])

//STEP 12
// I didn't understand the instructions for this exercise.
// let favoriteMovies = ["The Matrix","Avengers: Endgame","True Lies","Robocop","Akira","Jurassic Park","Gremlins 2: The New Batch"]
// let leastLikedMovies = ["Pokemon The Movie 2000","Leprechaun 5: In The Hood","Tenant"]
// const keys = leastLikedMovies.keys()
// console.log(keys)
// let newFavMovies = new Array(keys.length)
// for (let i = 0; i < keys.length; i++) {
//     newFavMovies[i] = favoriteMovies[i]
//     console.log('hello')
//     console.log(i)
//     console.log(newFavMovies)
// }
// console.log(newFavMovies)

//STEP 13
// This one was annoying to figure out
// let movieList = [["The Matrix",1],["Avengers: Endgame",2],["True Lies",3],["Robocop",4],["Akira",5],["Jurassic Park",6],["Gremlins 2: The New Batch",7]]
// let moviesOnly = movieList.filter((movie) => {
//     for (const i of movie) {
//         if (typeof i === 'string') {
//             console.log(i)
//         }
//     }
// })

//STEP 14
// let employees = ['Marcus','Stacy','Larry','Sarah','Miyako','Shin','Janes']
// const showEmployee = (empList) => {
// console.log("Employees: \n\n")
//     for (emp of empList) {
//         console.log(`${emp.toUpperCase()}\n`)
//     }
// }
// showEmployee(employees)

//STEP 15
// Not sure if there is a more efficient way to do this...
// let values = [58, '', 'abcd', true, null, false, 0]
// let realValues = values.filter((data) => {
//     return  data !== 0 && data !== '' && data !== false && typeof data !== 'object'
// })
// console.log(realValues)

//STEP 16
// let numberList = []
// for (let i = 0; i <= 20; i++) {
//     numberList[i] = i
// }
// const randomElement = numberList[Math.floor(Math.random() * numberList.length)]
// console.log(randomElement)

//STEP 17
// let numberList = []
// let randomList = []
// for (let i = 0; i <= 20; i++) {
//     numberList[i] = i
// }

// const largestNum = (array) => {
//     return Math.max(...array)
// }

// let largest = largestNum(numberList)
// console.log(largest)

// const randoms = () => {
//     let makeRandomList = []
//     for (let i = 0; i <= 5; i++) {
//     makeRandomList[i] = numberList[Math.floor(Math.random() * numberList.length)];
//     }
//     return makeRandomList
// }

// randomList = randoms(numberList)
// console.log(randomList)
// let largestRandom = largestNum(randomList)
// console.log(largestRandom)