import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAtXP6jtAFsU2VWrUcqkbxPaNCj158B5eI',
  authDomain: 'busco-a-mi-mascota.firebaseapp.com',
  databaseURL: 'https://busco-a-mi-mascota.firebaseio.com',
  projectId: 'busco-a-mi-mascota',
  storageBucket: 'busco-a-mi-mascota.appspot.com',
  messagingSenderId: '837168751688'
}

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
