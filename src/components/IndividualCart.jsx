import Button from './Button';
import { memo } from 'react';

const IndividualCart = memo(function IndividualCart({
  product,
  currentItem,
  onAddToCart,
  onIncrement,
  onDecrement,
  onRemove,
  isShoppingPage = false,
}) {
  // const theItem = [...cartItems].find(item => product.id === item.id);
  console.log('rendered', product.id);
  return (
    <div className="cart border border-black">
      <div className="product-img w-[200px]">
        <img
          className="object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="product-info">
        <p>Title: {product.title}</p>
        <p>desc: {product.description}</p>
        <p>price: {product.price}</p>
        <p>rate: {product.rating.rate}</p>
        <p>count: {product.rating.count}</p>
      </div>
      <div className="button-controller">
        {currentItem ? (
          <>
            {currentItem.inCart > 1 ? (
              <Button
                style={{ padding: '0.25em' }}
                onClick={() => onDecrement(product.id)}
              >
                -
              </Button>
            ) : (
              <Button
                style={{ padding: '0.25em' }}
                onClick={() => onRemove(product.id)}
              >
                Remove
              </Button>
            )}
            <span>{currentItem.inCart}</span>
            <Button
              style={{ padding: '0.25em' }}
              onClick={() => onIncrement(product.id)}
            >
              +
            </Button>
            {isShoppingPage && (
              <Button
                style={{ padding: '0.25em' }}
                onClick={() => onRemove(product.id)}
              >
                Remove
              </Button>
            )}
          </>
        ) : (
          <Button
            style={{ color: 'yellow' }}
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
});

export default IndividualCart;
