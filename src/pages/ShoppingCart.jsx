import { useOutletContext } from 'react-router-dom';
import IndividualCart from '../components/IndividualCart';

export default function ShopppingCart() {
  const [cartItems, setCartItems] = useOutletContext();
  return cartItems.length === 0 ? (
    <h2>Your Cart is empty</h2>
  ) : (
    <div>
      <h2>Shopping Cart</h2>
      <section className="">
        {cartItems.map(cartItem => (
          <IndividualCart key={cartItem.id} product={cartItem} />
        ))}
      </section>
    </div>
  );
}
