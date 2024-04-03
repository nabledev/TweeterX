<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'


async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8082/tweets');

        const data = response.data;
        console.log(data)
        tasks.value = data;

        
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

</script>

<template>
  <header>
 

    <div class="wrapper">
     

      <nav>
        <RouterLink to="/connexion">connexion</RouterLink>
        <RouterLink to="/inscription">inscription</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />


</template>

<style scoped>

</style>
