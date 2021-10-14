import Vue from 'vue'
import ProductList from './components/product/ProductList.vue'
import ProductPurchase from './components/product/ProductPurchase.vue'
import ProductSell from './components/product/ProductSell.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: ProductList },
    { path: '/productPurchase', component: ProductPurchase },
    { path: '/productSell', component: ProductSell },
    { path: '*', redirect: '/' }
]

export const router = new VueRouter({
    mode: 'history',
    routes
})