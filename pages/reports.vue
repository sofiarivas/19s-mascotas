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
          <div v-if="details.neighborhood">
            <h3>Rescatado en:</h3>
            <ul>
              <li>Zona: {{ details.neighborhood }}</li>
              <li v-if="details.street">Calle: {{ details.street }}</li>
            </ul>
          </div>
          <div class="tag-container">
            <h3>Algunos detalles:</h3>
            <div v-if="details.pet_details.pet_type" class="tags">
              <span class="tag is-dark">{{ details.pet_details.pet_type }}</span>
              <span class="tag is-light"> {{ details.pet_details.pet_size }}</span>
              <span v-if="details.pet_details.pet_color" class="tag is-light"> {{ details.pet_details.pet_color }}</span>
            </div>
          </div>
          <h3 v-if="details.date">Fecha de reporte: <span class="report-date">{{ details.date }} </span></h3>
          
        </article>
        <article class="tile is-child box content">
          <h2> Datos de Contacto </h2>
          <h3>Rescatado por: <span class="report-details-text">{{ details.contact_name }}</span></h3>
          <h3 v-if="details.contact_details">Detalles de contacto: <span class="report-details-text">{{ details.contact_details }}</span></h3>
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
  name: 'detailView',
  asyncData (context) {
    console.log(context.route)
    if (!context.route.query.reportId) {
      return {
        details: {
          pet_details: { }
        }
      }
    }
    let result = firebase.database().ref(`/reports/${context.route.query.reportId}`).once('value').then((res) => {
      let data = res.val()
      console.log(data)
      return { details: data }
    })
    return result
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
