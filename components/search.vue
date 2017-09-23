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
              <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title">{{ result.details.title }}</p>
                <p class="subtitle">Reportador por: {{ result.details.username }}</p>
              </div>
            </div>
            <div class="content" > {{ result.details.description }}
              <br><br>
              <time datetime="2016-1-1">{{ result.details.date }}</time>
            </div>
          </div>
        </div>
      </template>
    </ais-results>
  </ais-index>
</template>

<style scoped>
  .ais-results {
    margin-top: 15px;
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
</style>
