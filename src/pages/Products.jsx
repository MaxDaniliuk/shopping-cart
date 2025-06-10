import { useContext, useCallback } from 'react';
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

  const addToCart = useCallback(function addToCart(productToAdd) {
    setCartItems(prevCartItems => [
      { ...productToAdd, inCart: 1 },
      ...prevCartItems,
    ]);
  }, []);

  return error ? (
    <FetchErrorPage message={error.message} />
  ) : (
    <div>
      <h1 className="mb-[0.2em] text-3xl font-bold">Results</h1>
      <section className="grid auto-rows-min grid-cols-[repeat(auto-fill,minmax(min(240px,100%),1fr))] gap-8">
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
