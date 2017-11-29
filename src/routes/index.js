import React from 'react'

import Home from '../modules/home/'
import { LazyFoo, LazyBar } from '../modules/example/'
// import LazyBar from '../modules/example/bar'
// import LazyFoo from '../modules/example/foo'
import NotFound from '../components/notfound'

let routes = [{
  path: '/',
  component: Home
}, {
  path: '/example',
  component: LazyBar
}, {
  path: '/example/foo',
  component: LazyFoo
}, {
  path: '/example/bar',
  component: LazyBar
}]

routes.push({ component: NotFound })

export default routes
