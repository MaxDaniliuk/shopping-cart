import { useOutletContext, Link } from 'react-router-dom';
import IndividualCart from '../components/IndividualCart';
import useCartActions from '../hooks/useCartActions';
import Button from '../components/Button';

export default function ShopppingCart() {
  const [cartItems, setCartItems] = useOutletContext();
  const { incrementItem, decrementItem, removeItem } =
    useCartActions(setCartItems);
  return cartItems.length === 0 ? (
    <h1 className="mb-[0.2em] text-3xl font-bold">Your Cart is empty</h1>
  ) : (
    <div>
      <div className="flex">
        <h1 className="mb-[0.2em] mr-auto text-3xl font-bold">Shopping Cart</h1>
        <Button style="py-[0.3em] px-[0.75em] bg-[#facc15] hover:bg-[#fbbf24] rounded-full m-[0.8em]">
          <Link to="/payment">Proceed to checkout</Link>
        </Button>
      </div>
      <section className="flex flex-col gap-6">
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
