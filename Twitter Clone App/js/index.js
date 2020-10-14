const URL = "http://localhost:3000/tweets";


const onEnter = (e) => { // use keyboard event to call getTwitterData function
  if(e.key == "Enter") {
    getTwitterData();
  }
}
/**
 * Retrieve Twitter Data from API
 */
const getTwitterData = () => {
  const query = document.getElementById('user-search-input').nodeValue; // grab the information fromm the search
  if(!query) return; // return nothing is the search is blank
  const encodedQuery = encodeURIComponent(query); // allows you to use characters like # in your search
  const fullUrl = `${URL}?q=${encodedQuery}&count=10`; // builds URL based on search

  fetch(fullUrl).then((response) => {
    return response.json();
  }).then((data) => {

  })
}

/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {
}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {
}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {
}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {

}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {

}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {

}
