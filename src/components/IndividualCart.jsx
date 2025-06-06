import Button from './Button';

export default function IndividualCart({ product, onAddToCart }) {
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
        <p>
          <b>Number of same items added: {product.inCart}</b>
        </p>
      </div>
      <div>
        <Button style={{ color: 'yellow' }} onClick={onAddToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
