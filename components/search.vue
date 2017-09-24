<template>

  <ais-index app-id="VUPR3RSXRE" api-key="9b7b9defa421ae1ee8b39d8ba9b3f119" index-name="reports" :auto-search="false">
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
    <ais-results class="columns is-multiline is-desktop is-1">
      <template scope="{ result }">
        <div class="column is-one-third-desktop card">
          <div class="card-image">
            <figure class="image">
              <img v-if="result.photo_url" :src="result.photo_url" >
              <img v-else src="~/static/placeholder.png" alt="No contamos con imagen" >
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <nuxt-link :to="'/reports/'+result.objectID" class="title">{{ result.title }}</nuxt-link>
                <p class="subtitle">Responsable actual: {{ result.contact_name }}</p>
              </div>
            </div>
            <div class="content">
              <div class="description">{{ result.description }}</div>
              <br><div class="tags"><span v-for="detail in result.pet_details" class="tag is-light">
              {{ detail }}</span></div>
              <br><br>
              <time datetime="2016-1-1">Fecha de rescate: {{ result.date }}</time>
            </div>
          </div>
        </div>
      </template>
    </ais-results>
  </ais-index>
</template>

<style scoped>
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
    margin-bottom: 10px;
  }
</style>
