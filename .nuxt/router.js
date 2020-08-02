import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ca40e78 = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _41a947a8 = () => interopDefault(import('../pages/artists/_id.vue' /* webpackChunkName: "pages/artists/_id" */))
const _25bc03e0 = () => interopDefault(import('../pages/artists/_id/activities.vue' /* webpackChunkName: "pages/artists/_id/activities" */))
const _ec14c2ce = () => interopDefault(import('../pages/artists/_id/mythoughts.vue' /* webpackChunkName: "pages/artists/_id/mythoughts" */))
const _4395f10e = () => interopDefault(import('../pages/artists/_id/sharing.vue' /* webpackChunkName: "pages/artists/_id/sharing" */))
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
      path: "mythoughts",
      component: _ec14c2ce,
      name: "artists-id-mythoughts"
    }, {
      path: "sharing",
      component: _4395f10e,
      name: "artists-id-sharing"
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
