import HomePage from "../HomePage/HomePage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import OrderPage from "../OrderPage/OrderPage";
import ProductsPage from "../ProductsPage/ProductsPage";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        isShowHeader: true
        page:  ProductsPage,
    },
    {
        path: '*',
        page:  NotFoundPage
    },
]