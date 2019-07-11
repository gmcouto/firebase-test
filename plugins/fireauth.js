import { auth } from './firebase'
/**
 * A promise that returns true if the user is logged on or not.
 * If the information is not available, the promise awaits firebase to startup
 */
export default ({ store }) => {
  return new Promise((resolve) => {
    if (auth.currentUser) {
      resolve(true)
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          store.commit('login', user)
          resolve(true)
        } else {
          store.commit('login', null)
          resolve(false)
        }
      })
    }
  })
}
