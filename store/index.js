import { auth } from '../plugins/firebase'

export const state = () => ({
  user: {}
})

export const getters = {}

export const mutations = {
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
