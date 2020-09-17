import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ca40e78 = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _2ef08eda = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _6bc56a7a = () => interopDefault(import('../pages/artists/create.vue' /* webpackChunkName: "pages/artists/create" */))
const _21326d76 = () => interopDefault(import('../pages/artists/GalleryUpload.vue' /* webpackChunkName: "pages/artists/GalleryUpload" */))
const _7a0f2dbc = () => interopDefault(import('../pages/artists/uploadReference.vue' /* webpackChunkName: "pages/artists/uploadReference" */))
const _0f38b415 = () => interopDefault(import('../pages/create/about.vue' /* webpackChunkName: "pages/create/about" */))
const _19b6bdb4 = () => interopDefault(import('../pages/create/each1teach1.vue' /* webpackChunkName: "pages/create/each1teach1" */))
const _58f0628e = () => interopDefault(import('../pages/create/work.vue' /* webpackChunkName: "pages/create/work" */))
const _46303607 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _72920e2f = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))
const _5c01e92e = () => interopDefault(import('../pages/_id/bio_n_work.vue' /* webpackChunkName: "pages/_id/bio_n_work" */))
const _4d145b68 = () => interopDefault(import('../pages/_id/each1teach1.vue' /* webpackChunkName: "pages/_id/each1teach1" */))
const _faf3901c = () => interopDefault(import('../pages/_id/PortfolioEdit.vue' /* webpackChunkName: "pages/_id/PortfolioEdit" */))
const _67a43521 = () => interopDefault(import('../pages/_id/work.vue' /* webpackChunkName: "pages/_id/work" */))
const _5e33d79d = () => interopDefault(import('../pages/_id/sharing/_token.vue' /* webpackChunkName: "pages/_id/sharing/_token" */))

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
    path: "/create",
    component: _2ef08eda,
    name: "create"
  }, {
    path: "/artists/create",
    component: _6bc56a7a,
    name: "artists-create"
  }, {
    path: "/artists/GalleryUpload",
    component: _21326d76,
    name: "artists-GalleryUpload"
  }, {
    path: "/artists/uploadReference",
    component: _7a0f2dbc,
    name: "artists-uploadReference"
  }, {
    path: "/create/about",
    component: _0f38b415,
    name: "create-about"
  }, {
    path: "/create/each1teach1",
    component: _19b6bdb4,
    name: "create-each1teach1"
  }, {
    path: "/create/work",
    component: _58f0628e,
    name: "create-work"
  }, {
    path: "/",
    component: _46303607,
    name: "index"
  }, {
    path: "/:id",
    component: _72920e2f,
    name: "id",
    children: [{
      path: "bio_n_work",
      component: _5c01e92e,
      name: "id-bio_n_work"
    }, {
      path: "each1teach1",
      component: _4d145b68,
      name: "id-each1teach1"
    }, {
      path: "PortfolioEdit",
      component: _faf3901c,
      name: "id-PortfolioEdit"
    }, {
      path: "work",
      component: _67a43521,
      name: "id-work"
    }, {
      path: "sharing/:token?",
      component: _5e33d79d,
      name: "id-sharing-token"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
