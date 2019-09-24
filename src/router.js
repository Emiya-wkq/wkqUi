import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let router = new Router({
    //mode: 'history',
    //base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import(/* webpackChunkName: "about" */ './views/main.vue'),
            redirect: '/home',
            children:[
                {
                    path: '/home',
                    name: 'home',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/before/before.vue'),
                },{
                    path: '/use',
                    name: 'use',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/use/use.vue'),
                },{
                    path: '/bus',
                    name: 'bus',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/bus/bus.vue'),
                },{
                    path: '/isWeChat',
                    name: 'home',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/isWeChat/isWeChat.vue'),
                },{
                    path: '/confirm',
                    name: 'confirm',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/confirm/confirm.vue'),
                },{
                    path: '/sku',
                    name: 'sku',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/sku/sku.vue'),
                },{
                    path: '/countButton',
                    name: 'countButton',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/countButton/countButton.vue'),
                },{
                    path: '/floatButton',
                    name: 'floatButton',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/floatButton/floatButton.vue'),
                },{
                    path: '/tab',
                    name: 'tab',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/tab/tab.vue'),
                },{
                    path: '/loading',
                    name: 'loading',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/loading/loading.vue'),
                },{
                    path: '/priceFilter',
                    name: 'priceFilter',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/filter/price.vue'),
                }
            ]
        },
    ]
})


export default router