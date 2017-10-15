<template>

  <ais-index app-id="VUPR3RSXRE" api-key="9b7b9defa421ae1ee8b39d8ba9b3f119" index-name="reports" :auto-search="true">
    <ais-search-box>
      <div>
        <h2 class="search-box">Busca información de mascotas rescatadas:</h2>
        <ais-input
        placeholder="Ejemplo: labrador negro..."
        :class-names="{
          'ais-input': 'input'
          }"></ais-input>
<!--         <span>
          <button class="button is-danger submit-button" type="submit">
            <span class="" aria-hidden="true">Buscar</span>
          </button>
        </span> -->
      </div>
    </ais-search-box>
    <ais-results class="columns is-multiline is-desktop">
      <template scope="{ result }">
        <div class="column is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
          <div class="card">
          <nuxt-link :to="'/reports/?reportId='+result.objectID">
          <div class="card-image">
            <figure class="image">
              <img v-if="result.photo_url" :src="result.photo_url" >
              <img v-else src="~/static/placeholder.png" alt="No contamos con imagen" >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <nuxt-link :to="'/reports/?reportId='+result.objectID" class="title">{{ result.title }}</nuxt-link>
                <!-- <p class="subtitle">Responsable actual: {{ result.contact_name }}</p> -->
              </div>
            </div>
            <div class="content">
              <div class="description">{{ result.description }}</div>
              <div class="tags"><span v-for="detail in result.pet_details" class="tag is-light">
              {{ detail }}</span></div>
              <time datetime="2016-1-1">Fecha de rescate: {{ result.date }}</time><br>
              <span class="subtitle">Estado: </span><span>{{result.state || "Sin entregar" }}</span>
            </div>
          </div>
        </nuxt-link>
        </div>
        </div>
      </template>
    </ais-results>
    <ais-no-results>
       <template scope="{ result }">
        No encontramos resultados.
       </template>
    </ais-no-results>
  </ais-index>
</template>

<style scoped>
  a {
    color: #4a4a4a;
  }

  .column {
    height: 630px;
  }

  .card {
    height: 100%;
  }

  .title {
    display: block;
    font-weight: 500;
    font-size: 22px;
    color: #5bb786;
    margin-top: 15px;
  }

  .title:hover {
    color: #4A4A4A;
  }

  .subtitle {
    font-weight: 500;
    font-size: 16px;
    color: #4A4A4A;
    padding-bottom: 5px;
  }

  .ais-results {
    margin: 15px;
  }

  input {
    margin: auto;
    margin-bottom: 10px;
    width: 95%;
    border-radius: 20px;
  }

  .search-box {
    text-align: left;
    padding: 0 0 10px 30px;
    color: #5BB786;
  }

  .submit-button {
    width: 120px;
    border-radius: 20px;
  }

  .content {
    text-align: left;
  }

  .description {
    border-top: 1px solid #e5e5e5;
    padding: 20px 0;
  }
  .card-image {
    height: 310px;
    overflow: hidden;
  }
  .card-image figure, .card-image img {
    height: 100%;
    max-width: none !important;
    width: auto;
    margin: 0 auto;
  }
</style>
