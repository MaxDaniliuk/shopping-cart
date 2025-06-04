import { useContext } from 'react';
import { ProductsContext } from '../layouts/RootLayout';
import FetchErrorPage from './errors/FetchErrorPage';

export default function Products() {
  const { products, error } = useContext(ProductsContext);

  return error ? (
    <FetchErrorPage message={error.message} />
  ) : (
    <div>
      <h2>Products</h2>
    </div>
  );
}
