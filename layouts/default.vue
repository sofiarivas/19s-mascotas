<template>
  <div>
    <div v-if="$route.fullPath !== '/'" class="logo-container">
      <img class="logo is-small" src="logo.png"/>
    </div>
    <div class="link-container">
      <nuxt-link v-if="$route.fullPath !== '/'" nuxt-link to="/" class="button link-item">Buscar mascota</nuxt-link>
      <nuxt-link to="/publish" class="button is-info link-item">Publicar mascota rescatada</nuxt-link>
    </div>
  <nuxt/>
  </div>
</template>

<style scoped>
  .link-contaner, .logo-container {
    display: inline-block;
  }
  .link-container {
    text-align: right;
    margin: 30px;
    float: right;
  }
  .link-item {
    margin-left: 10px;
  }
  .logo {
    margin: 1em;
    width: 200px;
  }
</style>