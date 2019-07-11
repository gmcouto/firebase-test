import { auth } from '../plugins/firebase'

export const state = () => ({
  firebaseStarted: false,
  user: {}
})

export const getters = {}

export const mutations = {
  firebaseStarted(state) {
    state.firebaseStarted = true
  },
  login(state, user) {
    if (user) state.user = JSON.parse(JSON.stringify(user))
    else state.user = null
  }
}

export const actions = {
  async emailLogin(context, { email, password }) {
    await auth.signInWithEmailAndPassword(email, password)
  }
}
