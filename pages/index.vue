<template>
  <section class="container">
    <div>
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
  components: {
    Logo,
    Search
  }
}
</script>

<style>
.container {
  top-margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 35px;
  color: #9B9B9B;
  letter-spacing: 1px;
  margin-top: 30px;
}

.subtitle {
  font-weight: 500;
  font-size: 16px;
  color: #4A4A4A;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
