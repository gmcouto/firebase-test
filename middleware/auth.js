import firebaseStarted from '../plugins/firebaseStarted'

export default async function({ store, redirect, route }) {
  if (isLoginRoute(route) || isUserRoute(route)) {
    await firebaseStarted({ store })
    store.state.user != null && isLoginRoute(route) ? redirect('/upload') : ''
    store.state.user == null && isUserRoute(route) ? redirect('/login') : ''
  }
}

function isLoginRoute(route) {
  if (route.matched.some((record) => record.path == '/login')) {
    return true
  }
}

function isUserRoute(route) {
  if (route.matched.some((record) => record.path == '/upload')) {
    return true
  }
}
