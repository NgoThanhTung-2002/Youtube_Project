import HomePage from "../HomePage/HomePage";
import OrderPage from "../OrderPage/OrderPage";
import OrderPage from "../OrderPage/ProductsPage";

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