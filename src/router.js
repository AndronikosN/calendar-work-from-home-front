import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import Login from "@/components/Login.vue";

Vue.use(VueRouter);

const routes = [
    {path:'', component: Login},
    {path:'/dashboard', component: Dashboard}
]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})
//

export default router