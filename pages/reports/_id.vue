<template>
  <h3> Detalle </h3>
</template>
<script>
import firebase from 'firebase'

export default {
  asyncData (context) {
    return { project:
      firebase.database().ref(`/reports/${context.route.path}`).once('value').then(function (snapshot) {
        const details = snapshot.val().details
        console.log(details)
      })
    }
  }
}
</script>