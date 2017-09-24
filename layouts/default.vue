<template>
  <div>
    <div v-if="$route.fullPath !== '/'" class="logo-container">
        <a href="/"><img class="logo is-small" src="~/static/logo.png"/></a>
    </div>
    <div class="top-container">
      <div class="link-container">
        <nuxt-link v-if="$route.fullPath !== '/'" nuxt-link to="/" class="button link-item">Buscar mascota</nuxt-link>
        <nuxt-link to="/publish" class="button is-info link-item">Publicar mascota rescatada</nuxt-link>
      </div>
    </div>
  <nuxt/>
<!--   <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          CONTACTO: busco_mascota_contacto@gmail.com
          <a class="icon" href="https://github.com/sofiarivas/19s-mascotas">
            <i class="fa fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  </footer> -->
  </div>
</template>

<style scoped>
  .top-container {
    text-align: right;
  }
  .link-container, .logo-container {
      display: inline-flex;
  }
  .logo-container {
    margin: 10px;
  }
  .link-container {
    /*float: right;*/
    margin: 10px;
  }
  .link-item {
    margin: 5px;
  }
  .logo {
    margin: 1em;
  }
  .footer {
    padding: 10px;
    font-size: 12px;
  }
  .icon {
    font-size: 22px;
  }
</style>