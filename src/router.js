import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Portfolio from './views/Portfolio'
import About from './views/About'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/Home", component: Home },
        { path: "/Index", component: Home },
        { path: "/Portfolio", component: Portfolio },
        { path: "/About", component: About },
    ]
})

export default router