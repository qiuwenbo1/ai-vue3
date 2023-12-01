import {createRouter, createWebHistory} from "vue-router";
const routes = [

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