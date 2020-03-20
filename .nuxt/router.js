import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _788a7a4c = () => interopDefault(import('../pages/comments/index.vue' /* webpackChunkName: "pages/comments/index" */))
const _018a7a1b = () => interopDefault(import('../pages/new.vue' /* webpackChunkName: "pages/new" */))
const _4f9daf50 = () => interopDefault(import('../pages/top.vue' /* webpackChunkName: "pages/top" */))
const _03d2f818 = () => interopDefault(import('../pages/comments/_postId.vue' /* webpackChunkName: "pages/comments/_postId" */))
const _09adb8e6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/comments",
    component: _788a7a4c,
    name: "comments"
  }, {
    path: "/new",
    component: _018a7a1b,
    name: "new"
  }, {
    path: "/top",
    component: _4f9daf50,
    name: "top"
  }, {
    path: "/comments/:postId",
    component: _03d2f818,
    name: "comments-postId"
  }, {
    path: "/",
    component: _09adb8e6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
