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
    <ais-results>
      <template scope="{ result }">
        <h2>{{ result.details.title }}</h2>
      </template>
    </ais-results>
  </ais-index>
</template>

<style scoped>

  .search-box {
    text-align: left;
    padding: 0 0 10px 30px;
    color: #5BB786;
  }

  input {
    margin: auto;
    margin-bottom: 10px;
    width: 95%;
    border-radius: 20px;
  }

  .submit-button {
    width: 120px;
    border-radius: 20px;
  }
</style>
