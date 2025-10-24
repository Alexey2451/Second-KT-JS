import { createRouter, createWebHistory } from 'vue-router';

// routing map preserved; paths adjusted to new views/ structure
import { CartPage } from '@/views/CartPage';
import { FavPage } from '@/views/FavPage';
import { IndexPage } from '@/views/IndexPage';
import { ProductPage } from '@/views/ProductPage';
import { ProductsPage } from '@/views/ProductsPage';

const routes = [
    {
        path: '/',
        component: IndexPage,
    },
    {
        path: '/products',
        component: ProductsPage,
    },
    {
        path: '/product/:id',
        component: ProductPage,
        props: true,
    },
    {
        path: '/fav',
        component: FavPage,
    },
    {
        path: '/cart',
        component: CartPage,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
