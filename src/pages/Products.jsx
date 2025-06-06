import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';
import FetchErrorPage from './errors/FetchErrorPage';
import IndividualCart from '../components/IndividualCart';

export default function Products() {
  const { products, error } = useContext(ProductsContext);
  const [cartItems, setCartItems] = useOutletContext();

  function addToCart(productToAdd) {
    const items = [...cartItems];
    let newCartItems;
    const sameProduct = items.find(item => productToAdd.id === item.id);
    const otherProducts = items.filter(item => productToAdd.id !== item.id);
    if (!sameProduct) {
      // Turns undefined (false), which means there is no such product, to true
      newCartItems = [...otherProducts, { ...productToAdd, inCart: 1 }];
    } else {
      newCartItems = [
        ...otherProducts,
        { ...sameProduct, inCart: sameProduct.inCart + 1 },
      ];
    }

    setCartItems(newCartItems);
  }

  return error ? (
    <FetchErrorPage message={error.message} />
  ) : (
    <div>
      <h2>Results</h2>
      <section className="grid grid-cols-3 gap-1.5">
        {products.map(product => (
          <IndividualCart
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </section>
    </div>
  );
}
