import firebase from 'firebase/app'
import 'firebase/storage' //if use firestore
import { firebaseConfig } from '../firebaseConfig'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const storage = firebase.storage()

export { storage }
