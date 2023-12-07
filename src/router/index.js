import {createRouter, createWebHistory} from "vue-router";
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        redirect: '/login',
        meta:{
            title: '登录'
        },
        component:()=>import('../view/Login.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
 router.beforeEach((to,from,next)=>{
     if (to.meta.title){
         document.title = 'XXX-helloVue3'+to.meta.title
     }
     if (to.path === '/login'){
         return next()
     }
     const token = sessionStorage.getItem('token')
     if (!token){
         return next('/login')
     }else {
         next()
     }
     return next()
 })

export default router