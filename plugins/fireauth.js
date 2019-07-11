import { auth } from './firebase'

export default async ({ store }) => {
  auth.onAuthStateChanged((user) => {
    if (user) store.commit('login', user)
    else store.commit('login', null)
    store.commit('firebaseStarted')
  })
}
