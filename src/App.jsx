import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { rootLoader } from './loaders/rootLoader';
//layouts
import RootLayout from './layouts/RootLayout';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import ShopppingCart from './pages/ShoppingCart';
import Payment from './pages/Payment';
import NotFoundPage from './pages/errors/NotFound';
import FetchErrorPage from './pages/errors/FetchErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      loader={rootLoader}
      shouldRevalidate={() => false}
      element={<RootLayout />}
    >
      <Route index element={<Home />} />
      <Route
        path="products"
        errorElement={<FetchErrorPage />}
        element={<Products />}
      />
      <Route path="cart" element={<ShopppingCart />} />
      <Route path="payment" element={<Payment />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
