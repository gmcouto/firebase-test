import fireauth from '../plugins/fireauth'

export default async function({ store, redirect, route }) {
  await fireauth({ store })
  store.state.user != null && route.path == '/login' ? redirect('/upload') : ''
  store.state.user == null && isUserRoute(route) ? redirect('/login') : ''
}

function isUserRoute(route) {
  if (route.matched.some((record) => record.path == '/upload')) {
    return true
  }
}
