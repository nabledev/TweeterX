import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useProdctStore = defineStore('tweets', () => {
  const TheTweets = ref([])
  axios.get("http://localhost:7410/tweetsjoin")
    .then( response => {
      console.log(response.data)
      TheTweets.value = response.data.tweets
    })

  return { TheTweets}
})
