<script setup>

</script>

<template>
  <main>
    <div id="ContainerGeneral">
      <img src="../../public/logoX.png" alt="">
      <div id="divInfo">
        <h1>Ça se passe maintenant</h1>
        <h2>Inscrivez vous</h2>
        <form>
          <label for="user">Nom d'utilisateur</label>
          <input type="text" name="user">
          <label for="mdp">Mot de passe</label>
          <input type="password" name="mdp">
          <span id="createAccount">Connexion</span>
        </form>
        
        <h3>Vous avez déja un compte ?</h3>
        <span>se connecter</span>
      </div>
    </div>
  </main>
</template>

<script>

</script>

<style scoped>

#ContainerGeneral{
  display: flex;
  flex-direction: row;
}

form{
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

h1{
  font-size: 64px;
  max-width: 600px;
}

input{
  margin-top: 12px;
  background-color: black;
  border : 0.1px solid #66696e
}

button{
  background-color: black;
  color: white;
}

#divInfo{
  margin-left: 200px;
  margin-top: 50px;
}

#createAccount{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 20px 10px 20px 10px;
  background: rgb(32,32,171);
  background: linear-gradient(90deg, rgba(32,32,171,1) 0%, rgba(19,165,195,1) 100%);
  border-radius: 8px;
}

#createAccount:hover{
  cursor: pointer;
}


label{
  margin-top: 4px;
}


</style>
