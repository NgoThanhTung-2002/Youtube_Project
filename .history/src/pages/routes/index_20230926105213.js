import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import OrderPage from "../OrderPage/OrderPage";
import ProductsPage from "../ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage
    },
    {
        path: '/order',
        page: OrderPage
    },
    {
        path: '/products',
        page:  ProductsPage
    },
    {
        path: '*',
        page:  NotFoundPage
    },
]