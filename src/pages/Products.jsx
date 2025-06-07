import { useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import ProductsContext from '../contexts/ProductsContext';
import FetchErrorPage from './errors/FetchErrorPage';
import IndividualCart from '../components/IndividualCart';
import useCartActions from '../hooks/useCartActions';

export default function Products() {
  const { products, error } = useContext(ProductsContext);
  const [cartItems, setCartItems] = useOutletContext();
  const { incrementItem, decrementItem, removeItem } =
    useCartActions(setCartItems);

  function addToCart(productToAdd) {
    setCartItems(prevCartItems => [
      { ...productToAdd, inCart: 1 },
      ...prevCartItems,
    ]);
  }
  console.log('products');

  return error ? (
    <FetchErrorPage message={error.message} />
  ) : (
    <div>
      <h2>Results</h2>
      <section className="grid grid-cols-3 gap-1.5">
        {products.map(product => {
          const item = cartItems.find(ci => ci.id === product.id);
          return (
            <IndividualCart
              key={product.id}
              product={product}
              currentItem={item}
              onAddToCart={addToCart}
              onIncrement={incrementItem}
              onDecrement={decrementItem}
              onRemove={removeItem}
            />
          );
        })}
      </section>
    </div>
  );
}
