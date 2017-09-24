<template>
  <div class="publish-form-container">
    <h1 class="is-size-1">Registrar mascota rescatada</h1>
    <div class="columns">
      <form class="column is-half">
        <legend> Introduce los datos de la mascota que encontraste, lo más completos posible.</legend>
        <br>
        <div class="field">
          <label class="label">Título de la publicación</label>
          <div class="control">
            <input class="input" type="text" placeholder="Ej. Labrador Negro cerca de Amstedam" v-model="title">
          </div>
        </div>
        <div class="field">
          <label class="label">Descripción de la mascota perdida</label>
          <div class="control">
            <input class="input" type="text" placeholder="Ej. Labrador Negro" v-model="petDescription">
          </div>
        </div>
        <div class="field">
          <label class="label">Especie de la mascota</label>
          <div class="control">
            <div class="select is-info">
              <select v-model="petType">
                <option value="perro"> Perro </option>
                <option value="gato"> Gato </option>
                <option value="Otro"> Otro </option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Raza (si aplica)</label>
          <div class="control">
            <input class="input" type="text" placeholder="Labrador" v-model="petDescription">
          </div>
        </div>
        <div class="field">
          <label class="label">Color</label>
          <div class="control">
            <input class="input" type="text" placeholder="Negro" v-model="petColor">
          </div>
        </div>
        <div class="field">
          <label class="label">Tamaño</label>
          <div class="control">
            <div class="select is-info">
              <select v-model="petSize">
                <option value="pequeño"> Pequeño </option>
                <option value="mediano"> Mediano </option>
                <option value="grande"> Grande </option>
              </select>
            </div>
          </div>
        </div>
        <div class="file has-name is-info">
          <label class="file-label">
            <input class="file-input" type="file" name="pet_photo" id="pet_photo" @change="changedPhoto">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fa fa-upload"></i>
              </span>
              <span class="file-label">
                Subir una fotografía
              </span>
            </span>
            <span class="file-name"> {{file_name}} </span>
          </label>
        </div>
        <hr>
        <h2 class="is-size-3"> Rescate </h2>
        <div class="field">
          <label class="label">Vecindario</label>
          <div class="control">
            <input class="input" type="text" placeholder="Condesa-Roma" v-model="foundNeighborhood">
          </div>
        </div>
        <div class="field">
          <label class="label">Calle</label>
          <div class="control">
            <input class="input" type="text" placeholder="Amsterdam" v-model="foundStreet">
          </div>
        </div>
        <div class="field">
          <label class="label">Fecha</label>
          <div class="control">
            <input class="input" type="text" placeholder="20-09-2017" v-model="foundDate">
          </div>
        </div>
        <hr>
        <h2 class="is-size-3"> Datos de contacto </h2>
        <div class="field">
          <label class="label">Nombre de responsable actual</label>
          <div class="control">
            <input class="input" type="text" placeholder="Pedro Piedra" v-model="contactName">
          </div>
        </div>
        <div class="field">
          <label class="label">Teléfono de Contacto</label>
          <div class="control">
            <input class="input" type="text" placeholder="5566778899" v-model="contactPhone">
          </div>
        </div>
        <div class="field">
          <label class="label">Detalles de contacto</label>
          <div class="control">
            <input class="input" type="text" placeholder="Contactar después de las 7PM" v-model="contactDetails">
          </div>
        </div>
<!--         <pre>
          {{$data}}
        </pre> -->
        <div class="has-text-danger" v-if="errors">
          {{errors}}
        </div>
        <input type="button" value="Registrar" class="button is-success is-large" @click="saveData">
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  asyncData (params) {
    return {
      file_name: 'foto_perrito.jpg',
      urlFile: null,
      petDescription: null,
      foundDate: null,
      foundNeighborhood: null,
      foundStreet: null,
      petBreed: null,
      petSize: 'mediano',
      petType: 'perro',
      contactPhone: null,
      contactDetails: null,
      contactName: null,
      petColor: null,
      title: null,
      errors: ''
    }
  },
  methods: {
    changedPhoto (evt) {
      console.log()
      const fileInput = evt.target
      this.file_name = fileInput.files[0].name
    },
    saveData (evt) {
      const fileInput = document.querySelector('#pet_photo')
      if (fileInput.files.length > 0) {
        // upload the file and then save data
        this.uploadFile(fileInput.files[0])
      } else {
        // only save data
        this.saveInFirebase()
      }
    },
    saveInFirebase () {
      const data = {
        contact_number: this.contactPhone,
        contact_details: this.contactDetails,
        contact_name: this.contactName,
        date: this.foundDate,
        description: this.petDescription,
        neighborhood: this.foundNeighborhood,
        street: this.foundStreet,
        title: this.title,
        photo_url: this.urlFile,
        pet_details: {
          pet_breed: this.petBreed && this.petBreed.toLowerCase().trim(),
          pet_size: this.petSize,
          pet_type: this.petType,
          pet_color: this.petColor && this.petColor.toLowerCase().trim()
        }
      }
      const mFields = ['title', 'petDescription', 'contactPhone', 'contactName']
      this.errors = ''
      for (const field of mFields) {
        if (!this[field]) {
          console.log('Errors!!!!')
          this.errors = 'Por favor llena por lo menos los campos Título, Descripción de la mascota perdida, Nombre de responsable actual y Teléfono de contacto.'
          return
        }
      }
      console.log(data)
      let key = firebase.database().ref().child('reports').push().key
      let updates = {}
      updates[key] = data
      firebase.database().ref('/reports').update(updates).then(() => this.$router.replace({ path: '/thank-you' }))
    },
    uploadFile (file) {
      var storageRef = firebase.storage().ref()
      // Create the file metadata
      var metadata = {
        contentType: 'image/jpeg'
      }
      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child('images/' + file.name).put(file, metadata)

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        }, function (error) {
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break
            case 'storage/canceled':
              // User canceled the upload
              break
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        }, function () {
          // Upload completed successfully, now we can get the download URL
          this.urlFile = uploadTask.snapshot.downloadURL
          console.log(this.urlFile)
          this.saveInFirebase()
        }.bind(this))
    }
  }
}
</script>
<style scoped>
  h1 {
    color: #363636;
    font-weight: 500;
    font-size: 20px;
  }
  .publish-form-container {
    margin: auto;
    width: 90%;
  }
</style>

