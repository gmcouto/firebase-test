import { auth } from './firebase'

export default async (context) => {
  const { store } = context
  auth.onAuthStateChanged((user) => {
    if (user) store.commit('login', user)
    else store.commit('login', null)
  })
}
