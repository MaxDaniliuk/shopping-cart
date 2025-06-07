import { useOutletContext } from 'react-router-dom';
import IndividualCart from '../components/IndividualCart';
import Button from '../components/Button';
import useCartActions from '../hooks/useCartActions';

export default function ShopppingCart() {
  const [cartItems, setCartItems] = useOutletContext();
  const { incrementItem, decrementItem, removeItem } =
    useCartActions(setCartItems);

  console.log('shopping cart');
  return cartItems.length === 0 ? (
    <h2>Your Cart is empty</h2>
  ) : (
    <div>
      <div>
        <h2>Shopping Cart</h2>
        <Button style={{ padding: '0.5em' }}>Proceed to checkout</Button>
      </div>
      <section className="">
        {cartItems.map(cartItem => (
          <IndividualCart
            key={cartItem.id}
            product={cartItem}
            currentItem={cartItem}
            onIncrement={incrementItem}
            onDecrement={decrementItem}
            onRemove={removeItem}
            isShoppingPage={true}
          />
        ))}
      </section>
    </div>
  );
}
