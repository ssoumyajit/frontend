import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ca40e78 = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _269974c9 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _caa9e292 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _3b29da32 = () => interopDefault(import('../pages/events/create.vue' /* webpackChunkName: "pages/events/create" */))
const _41a947a8 = () => interopDefault(import('../pages/artists/_id.vue' /* webpackChunkName: "pages/artists/_id" */))
const _25bc03e0 = () => interopDefault(import('../pages/artists/_id/activities.vue' /* webpackChunkName: "pages/artists/_id/activities" */))
const _3e65121e = () => interopDefault(import('../pages/artists/_id/my_blogs.vue' /* webpackChunkName: "pages/artists/_id/my_blogs" */))
const _0e601571 = () => interopDefault(import('../pages/blogs/_id.vue' /* webpackChunkName: "pages/blogs/_id" */))
const _504b52df = () => interopDefault(import('../pages/events/_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _68ea2812 = () => interopDefault(import('../pages/events/_id/archive.vue' /* webpackChunkName: "pages/events/_id/archive" */))
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
    path: "/blogs",
    component: _269974c9,
    name: "blogs"
  }, {
    path: "/events",
    component: _caa9e292,
    name: "events"
  }, {
    path: "/events/create",
    component: _3b29da32,
    name: "events-create"
  }, {
    path: "/artists/:id",
    component: _41a947a8,
    name: "artists-id",
    children: [{
      path: "activities",
      component: _25bc03e0,
      name: "artists-id-activities"
    }, {
      path: "my_blogs",
      component: _3e65121e,
      name: "artists-id-my_blogs"
    }]
  }, {
    path: "/blogs/:id",
    component: _0e601571,
    name: "blogs-id"
  }, {
    path: "/events/:id",
    component: _504b52df,
    name: "events-id",
    children: [{
      path: "archive",
      component: _68ea2812,
      name: "events-id-archive"
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
