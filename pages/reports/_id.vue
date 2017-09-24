<template>
<div class="tile is-ancestor">
  <div class="tile is-vertical is-12">
    <div class="tile">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <figure class="image">
            <img v-if="details.photo_url" :src="details.photo_url" >
            <img v-else src="~/static/placeholder.png" alt="No contamos con imagen" >
          </figure>
        </article>
      </div>
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box content">
          <h2 class="is-large">{{ details.title }}</h2>
          <p>{{ details.description }}</p>
          <div>
            <h3>Rescatado en:</h3>
            <ul>
              <li>Zona: {{ details.neighborhood }}</li>
              <li>Calle: {{ details.street }}</li>     
            </ul>
          </div>
          <div class="tag-container">
            <h3>Algunos detalles:</h3>
            <div class="tags">
              <span class="tag is-dark">{{ details.pet_details.pet_type }}</span>
              <span class="tag is-light"> {{ details.pet_details.pet_size }}</span>
              <span class="tag is-light"> {{ details.pet_details.pet_color }}</span>
            </div>
          </div>
          <h3>Fecha de reporte: <span class="report-date">{{ details.date }} </span></h3>
          
        </article>
        <article class="tile is-child box content">
          <h2> Datos de Contacto </h2>
          <h3>Rescatado por: <span class="report-details-text">{{ details.contact_name }}</span></h3>
          <h3>Detalles de contacto: <span class="report-details-text">{{ details.contact_details }}</span></h3>
          <span class="icon has-text-info">
            <i class="fa fa-phone"></i>
          </span><span class="phone-number">{{ details.contact_number }}</span>
        </article>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import firebase from 'firebase'

export default {
  async asyncData (context) {
    let data = await firebase.database().ref(`/reports/${context.route.params.id}`).once('value')
    return { details: data.val() }
  }
}
</script>
<style scoped>
  .content h2 {
    font-weight: 500;
  }
  .content h3 {
    font-size: 17px;
    font-weight: 600;
  }
  .content h3 .report-date {
    font-weight: 400;
    font-size: 13px;
    display: block;
  }
  .content h3 .report-details-text {
    font-weight: 400;
    font-size: 16px;
    display: block;
  }
  .content ul {
    margin-left: 1em;
  }
  .content .phone-number {
    color: #3273dc;
    font-size: 18px;
    font-weight: 400;
  }
  .tag-container {
    margin: 15px 0;
  }
</style>
