import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './views/NotFound'
import Index from './views/Index'
import Profile from './views/Profile'
import Project from './views/Project'
import Detail from './views/Detail'
import About from './views/About'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: NotFound },
        { path: '/', component: Index },
        { path: '/Index', component: Index },
        { path: '/Profile', component: Profile },
        { path: '/Project', component: Project },
        { path: '/Project/:title', component: Detail },
        { path: '/About', component: About },
    ]
})

export default router