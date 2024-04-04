<script setup >
import { useProdctStore } from '@/stores/Annonces';
import axios from 'axios';
import cookie from "cookie";

import { onMounted } from 'vue';
const tweets = useProdctStore();
console.log(tweets);


</script>


<template>
  <main>
    <div id="GaucheContainer">
      <div class="IconAndTitre">
        <img class="imgIcon" src="../../public/home.png" alt="">
        <span>home</span>
      </div>
        
      <div class="IconAndTitre">
        <img class="imgIcon" src="../../public/explore.png" alt="">
        <span>Explore</span>
      </div>
      <div class="IconAndTitre">
        <img class="imgIcon" src="../../public/notification.png" alt="">
        <span>Notification</span>
      </div>
      <div class="IconAndTitre">
        <img class="imgIcon" src="../../public/Message.png" alt="">
        <span>Message</span>
      </div>
      <div class="IconAndTitre">
        <img class="imgIcon" src="../../public/Save.png" alt="">
        <span>Signet</span>
      </div>
      <div class="IconAndTitre">
        <img class="imgIcon" src="../../public/more.png" alt="">
        <span>plus...</span>
      </div>
    </div>


    <div class="tweets" v-for="item in tweets.TheTweets" :key="item.IDTWEET">
      <div class="headerTweet">
        <div class="infoUilisateur">
          <img class="imgProfil" src="../../public/Avatar.png" alt="">
          <h2>{{item.utilisateur.pseudoutilisateur}}</h2>

        </div>
        <img @mouseover="onLikeHover" class="imgLike" src="../../public/Coeur_empty.png" alt="">
      </div>

      <p>{{item.messagetweet}}</p>
    </div>

    <div id="textareapost">
      <form >
 
        <textarea ref="tweetTextArea" name="tweetpost" id="" cols="30" rows="10"></textarea>
        <button >Envoyer le tweet</button>
      </form>
      
    </div>
  </main>


</template>

<script>
export default {
  methods: {
    submitTweet() {

  // Accédez à la valeur du textarea via la référence
  const tweetContent = this.$refs.tweetTextArea.value;
console.log("le cookie" +  cookie.parse(document.cookie)['XSRF-TOKEN']);
  // Créez l'objet de données à envoyer
  const postData = {
    idutilisateur: parseInt(localStorage.getItem("Connected")),
    MESSAGETWEET: tweetContent,
    NBVUE: 0
  };
  console.log(postData);

  // Envoyez les données via une requête POST à l'API
  axios.post("http://localhost:7410/tweet", postData,{
    withCredentials:true,
    headers: {
        'Accept': 'application/json'
    }
  })
    .then(response => {
      // Gérer la réponse de la requête si elle réussit
      console.log(response.data);
    })
    .catch(error => {
      // Gérer les erreurs survenues lors de la requête
      console.error('Une erreur est survenue lors de la requête :', error);
      // Vous pouvez effectuer d'autres actions en cas d'erreur
    });
}

}
}

</script>

<style scoped>

#textareapost{
  position: fixed;
  right: 5%;
  bottom: 0px;
  width: 500px;
}

#textareapost textarea{
  width: 500px;
}
.headerTweet{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.tweets{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  box-shadow: 0px 10px 15px -3px rgba(255255,255,255.0);
  padding: 20px;
  border-radius: 20px;
  background-color: #1a202a;



  
}

#GaucheContainer{
  position: fixed;
  display: flex;
  flex-direction: column;
  border-right: 1px solid white;
  width: 300px;
  font-size: 26px;
  padding-left: 100px;
  padding-top: 80px;
  height: 100%;
}

.IconAndTitre{
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all ease-in-out 0.5s;
  padding: 20px;
}

.IconAndTitre:hover{
  color: #4b6186;
  border-left: 1px solid white;
  margin-left: 10px;
  cursor: pointer;
  
}

.imgIcon{
  width: 28px;
  height: 28px;
  margin-right: 20px;
 
}

.imgProfil{
  margin-right: 12px;
  width: 60px;
}

.infoUilisateur{
  display: flex;
  flex-direction: row;
}

.imgLike{
  width: 40px;
}
</style>
