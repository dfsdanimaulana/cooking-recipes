import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDk23a5S2Vdu9IJU6h5h5NnX9QDnnPq02E",
  authDomain: "cooking-recipe-d4688.firebaseapp.com",
  projectId: "cooking-recipe-d4688",
  storageBucket: "cooking-recipe-d4688.appspot.com",
  messagingSenderId: "771483112734",
  appId: "1:771483112734:web:60958d3c5c2b919712250f"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
