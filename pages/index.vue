<template>
  <section >
    <div class="container is-fluid">
      <logo/>
      <h1 class="title">
        ¡Ayudemos a cada mascota a regresar a su hogar!
      </h1>
<!--       <h2 class="subtitle">
        Busca información de mascotas extraviadas o reporta información de mascotas que fueron rescatadas.
      </h2> -->
      <div>
        <search/>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Search from '~/components/Search.vue'
export default {
  name: 'searchSection',
  components: {
    Logo,
    Search
  }
}
</script>

<style>
  .container {
    text-align: center;
  }

  .title {
    display: block;
    font-weight: 300;
    font-size: 25px;
    color: #9B9B9B;
    margin-top: 30px;
  }

  .title:hover {
    color: #5bb786;
  }

  .subtitle {
    font-weight: 500;
    font-size: 16px;
    color: #4A4A4A;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
