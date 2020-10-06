import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ca40e78 = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _46303607 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _5fe9476a = () => interopDefault(import('../pages/_username.vue' /* webpackChunkName: "pages/_username" */))
const _0e15f04a = () => interopDefault(import('../pages/_username/each1teach1/index.vue' /* webpackChunkName: "pages/_username/each1teach1/index" */))
const _3cd2ee74 = () => interopDefault(import('../pages/_username/work.vue' /* webpackChunkName: "pages/_username/work" */))
const _06177d32 = () => interopDefault(import('../pages/_username/each1teach1/_id.vue' /* webpackChunkName: "pages/_username/each1teach1/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/artists",
    component: _1ca40e78,
    name: "artists"
  }, {
    path: "/",
    component: _46303607,
    name: "index"
  }, {
    path: "/:username",
    component: _5fe9476a,
    name: "username",
    children: [{
      path: "each1teach1",
      component: _0e15f04a,
      name: "username-each1teach1"
    }, {
      path: "work",
      component: _3cd2ee74,
      name: "username-work"
    }, {
      path: "each1teach1/:id",
      component: _06177d32,
      name: "username-each1teach1-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
