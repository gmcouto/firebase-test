const state = {
  firebaseStarted: false
}
export default function({ store }) {
  return new Promise((resolve) => {
    if (state.firebaseStarted || store.state.firebaseStarted) {
      resolve()
    } else {
      store.subscribe((mutation) => {
        switch (mutation.type) {
          case 'firebaseStarted':
            state.firebaseStarted = true
            resolve()
        }
      })
    }
  })
}
