import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage' //if use firestore
import { firebaseConfig } from '../firebaseConfig'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const storage = firebase.storage()
export const auth = firebase.auth()
