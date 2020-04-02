/**
 * Done: Change sortMoviesByRank() function to sort movies list by rank
 * Done: Sort movies by id, rank, and title through dynamic function
 * Done: Create helper function called getMaxMovieObject() for finding max movie
 */

// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function() {
    // let sortedMovies = sortMoviesByRank(movies) - Use to test Sorting movies by rank
    // let sortedMovies = sortMoviesByAttribute(movies, 'title') - Use to test Dynamic Function
    // let sortedMovies = getMaxMovieObject(movies, start, sortAttribute) - Use to test Helper function
    // Display Movies list
    displayMovies(sortedMovies);
}

/**
 * Display list of movies in a table
 */
function displayMovies(movies){
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


/**
 * Sort movies by rank from greatest to smallest 
 */
function sortMoviesByRank(movies){
  for (let j = 0; j < movies.length - 1; j++) {

      let max_obj = movies[j];
      let max_location = j;

      for (let i = j; i < movies.length; i++) {
          if (movies[i].rank > max_obj.rank) {  // Compare movie's rank with the current maximum rank
              // Know max AND it's index (location) and replace object with higher ranking object if applicable
              max_obj = movies[i]
              max_location = i
          }
      }
      // swap the first and the last
      movies[max_location] = movies[j] // --> 10
      movies[j] = max_obj
  }

  return movies
}

/**
 * Dyanminc Function: Sort movies based on an attribute
 * @param sortAttribute pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttribute(movies, sortAttribute){
    for (let j = 0; j < movies.length - 1; j++) {

        let max_obj = movies[j];
        let max_location = j;
        // let max = getMaxMovieObject(movies, j, sortAttribute) - Use to test helper function
        // max_obj = max.max_obj; - Use to test helper function
        // max_location = max.max_index; - Use to test helper function
  
        for (let i = j; i < movies.length; i++) {
            if (movies[i][sortAttribute] > max_obj[sortAttribute]) {  // Compare movie's "attribute" with the current maximum "attribute"
                // Know max AND it's index (location) and replace object with higher ranking object if applicable
                max_obj = movies[i]
                max_location = i
            }
        }
        // swap the first and the last
        movies[max_location] = movies[j] // --> 10
        movies[j] = max_obj
    }
  
    return movies
}


/**
 * Helper function: Retrieve the max movie object based on attribute - Different way of sorting compared to dynamic function
 */
function getMaxMovieObject(movies, start, sortAttribute){
  // Code from previous findMaxHelper() function
  let max_obj = movies[start];
  let max_location = start

  for (let i = start; i < movies.length; i++) {
      if (movies[i][sortAttribute] > max_obj[sortAttribute]) { // Compare movie attribute 
          max_obj = movies[i]
          max_location = i
      }
  }
  return {max_obj: max_obj, max_index: max_location}
}



