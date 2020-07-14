import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ca40e78 = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _41a947a8 = () => interopDefault(import('../pages/artists/_id.vue' /* webpackChunkName: "pages/artists/_id" */))
const _25bc03e0 = () => interopDefault(import('../pages/artists/_id/activities.vue' /* webpackChunkName: "pages/artists/_id/activities" */))
const _49010cc9 = () => interopDefault(import('../pages/artists/_id/each1teach1.vue' /* webpackChunkName: "pages/artists/_id/each1teach1" */))
const _46303607 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/artists/:id",
    component: _41a947a8,
    name: "artists-id",
    children: [{
      path: "activities",
      component: _25bc03e0,
      name: "artists-id-activities"
    }, {
      path: "each1teach1",
      component: _49010cc9,
      name: "artists-id-each1teach1"
    }]
  }, {
    path: "/",
    component: _46303607,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
