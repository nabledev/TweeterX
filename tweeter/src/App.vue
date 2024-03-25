<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
