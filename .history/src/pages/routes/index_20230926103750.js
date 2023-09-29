import HomePage from "../HomePage/HomePage";
import OrderPage from "../OrderPage/OrderPage";
import ProductsPage from "../ProductsPage/ProductsPage";
import OrderPage from "../ProductsPage/ProductsPage";

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
]