<template>
  <div>
    <div class="link-container">
    <nuxt-link v-if="$route.fullPath !== '/'" nuxt-link to="/" class="button link-item">Buscar mascota</nuxt-link>
    <nuxt-link to="/publish" class="button is-info link-item">Publicar mascota rescatada</nuxt-link>
    </div>
    <nuxt/>
  </div>
</template>

<style scoped>
.link-container {
  text-align: right;
  margin: 30px;
}
.link-item {
  margin-left: 10px;
}
</style>