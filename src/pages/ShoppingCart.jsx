import { useOutletContext, Link } from 'react-router-dom';
import IndividualCart from '../components/IndividualCart';
import useCartActions from '../hooks/useCartActions';
import Button from '../components/Button';

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
        <Button>
          <Link to="/payment">Proceed to checkout</Link>
        </Button>
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
