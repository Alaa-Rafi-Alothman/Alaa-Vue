import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56f21018 = () => interopDefault(import('..\\pages\\Alaa-Todo.vue' /* webpackChunkName: "pages/Alaa-Todo" */))
const _de3216ac = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3691f3b6 = () => interopDefault(import('..\\pages\\l1.vue' /* webpackChunkName: "pages/l1" */))
const _3675c4b4 = () => interopDefault(import('..\\pages\\l2.vue' /* webpackChunkName: "pages/l2" */))
const _365995b2 = () => interopDefault(import('..\\pages\\l3.vue' /* webpackChunkName: "pages/l3" */))
const _2458d449 = () => interopDefault(import('..\\pages\\lesson1.vue' /* webpackChunkName: "pages/lesson1" */))
const _649ce4c1 = () => interopDefault(import('..\\pages\\To-Do List.vue' /* webpackChunkName: "pages/To-Do List" */))
const _050632b4 = () => interopDefault(import('..\\pages\\todo.vue' /* webpackChunkName: "pages/todo" */))
const _43a0c6bc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Alaa-Todo",
    component: _56f21018,
    name: "Alaa-Todo"
  }, {
    path: "/inspire",
    component: _de3216ac,
    name: "inspire"
  }, {
    path: "/l1",
    component: _3691f3b6,
    name: "l1"
  }, {
    path: "/l2",
    component: _3675c4b4,
    name: "l2"
  }, {
    path: "/l3",
    component: _365995b2,
    name: "l3"
  }, {
    path: "/lesson1",
    component: _2458d449,
    name: "lesson1"
  }, {
    path: "/To-Do%20List",
    component: _649ce4c1,
    name: "To-Do List"
  }, {
    path: "/todo",
    component: _050632b4,
    name: "todo"
  }, {
    path: "/",
    component: _43a0c6bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
