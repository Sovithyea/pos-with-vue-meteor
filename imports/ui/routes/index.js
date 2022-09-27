import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../pages/Home.vue')
    },

    {
        path: '/user',
        name: 'User',
        component: () => import('../pages/User.vue')
    },

    {
        path: '/customer',
        name: 'Customer',
        component: () => import('../pages/Customer.vue')
    },

    {
        path: '/item',
        name: 'Item',
        component: () => import('../pages/Item.vue')
    },

    {
        path: '/category',
        name: 'Category',
        component: () => import('../pages/Category.vue')
    },

    {
        path: '/supplier',
        name: 'Supplier',
        component: () => import('../pages/Supplier.vue')
    },

    {
        path: '/purchase',
        name: 'Purchase',
        component: () => import('../pages/Purchase.vue')
    },

    {
        path: '/sale',
        name: 'Sale',
        component: () => import('../pages/Sale.vue')
    },

    {
        path: '/import',
        name: 'Import',
        component: () => import('../pages/Import.vue')
    },

    {
        path: '/export',
        name: 'Export',
        component: () => import('../pages/Export.vue')
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('../pages/Test.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router