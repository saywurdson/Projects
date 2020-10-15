const axios = require('axios');
const URL = "https://apt.twitter.com/1.1/search/tweets/json";

class Twitter {
  get(query, count) {
    return axios.get(url, {
      params: {
        q: query,
        count: count,
        tweet_mode: "extended"
      },
      headers: {
        "Authorization": `Bearer ${process.env.TWITTER_API_TOKEN}` // allows me to hide Bearer token for privacy 
      }
    })  
  }
}

module.exports = Twitter;