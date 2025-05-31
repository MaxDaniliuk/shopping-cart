import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

//layouts
import RootLayout from './layouts/RootLayout';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import ShopppingCart from './pages/ShoppingCart';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<ShopppingCart />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
