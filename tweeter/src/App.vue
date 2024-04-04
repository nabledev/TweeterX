<script >
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue';

export default {
  data() {
    return {
      isUserLoggedIn: true // Initialisez la variable à false par défaut
    };
  },
  mounted() {
    console.log(localStorage.getItem('Connected'));
    // Récupérez la valeur de la variable depuis le local storage
    const userLoggedIn = localStorage.getItem('Connected');
    // Mettez à jour la variable avec la valeur du local storage
    if (userLoggedIn) {
      this.isUserLoggedIn = false;
    }
  },
  methods:{
    onclickDisconnected(){
    localStorage.removeItem('Connected');
    location.reload();
  }
  }
};
</script>

<template>
  <header>
 

    <div class="wrapper">
     

      <nav>
        <RouterLink to="/"><img src="../public/Twitter.png" alt=""></RouterLink>
        <div  v-if="isUserLoggedIn">
          <RouterLink to="/connexion">connexion</RouterLink>
          <RouterLink class="buttonInscri" to="/inscription">inscription</RouterLink>
        </div>
        <div v-else>
            <span @click="onclickDisconnected"  >se deconnecter</span>
        </div>
       
       
      </nav>
    </div>
  </header>

  <RouterView />


</template>

<style scoped>
nav{
  border-bottom: solid 1px white;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

a{
  color: white;
}

.buttonInscri{
  background-color: #1a202a;
  padding: 12px;
  border-radius: 8px;
  margin-left: 20px;
}
</style>
