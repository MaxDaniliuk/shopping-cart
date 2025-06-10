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
  return (
    <div className="flex flex-col border border-black">
      <div className={isShoppingPage ? 'flex' : ''}>
        <div className="flex h-[35vh] w-full items-center p-[0.5em]">
          <img
            className="max-h-full max-w-full object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className={'p-[0.8em] ' + `${isShoppingPage ? 'w-1/2' : ''}`}>
          <h3 className="mb-[0.1em] text-lg font-bold">{product.title}</h3>
          <p className="mb-[0.5em]">
            {product.description.replace(
              'Casual/Office/Beach/School/Home/Street.',
              'Casual, Office, Beach, School, Home, Street.',
            )}
          </p>
          <p className="flex items-center font-bold">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dollar-sign-icon lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </span>
            <span>{product.price}</span>
          </p>
        </div>
      </div>
      <div className="mt-auto flex justify-between">
        {currentItem ? (
          <>
            <div className="m-[0.8em] flex items-center gap-[1.125em] rounded-full border-[0.25em] border-[#facc15]">
              {currentItem.inCart > 1 ? (
                <Button
                  onClick={() => onDecrement(product.id)}
                  style="hover:scale-125 p-[0.3em]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-minus-icon lucide-minus"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </Button>
              ) : (
                <Button
                  onClick={() => onRemove(product.id)}
                  style="hover:scale-125 p-[0.3em]"
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-trash2-icon lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  }
                </Button>
              )}
              <span>{currentItem.inCart}</span>
              <Button
                onClick={() => onIncrement(product.id)}
                style="hover:scale-125 p-[0.3em]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-plus-icon lucide-plus"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </Button>
            </div>
            <div className="self-center">
              {isShoppingPage && (
                <Button
                  onClick={() => onRemove(product.id)}
                  style="hover:bg-[#000000] hover:text-[#FFFFFF] m-[0.8em] rounded-full py-[0.3em] px-[0.75em]"
                >
                  Delete
                </Button>
              )}
            </div>
          </>
        ) : (
          <Button
            style="py-[0.3em] px-[0.75em] bg-[#facc15] hover:bg-[#fbbf24] rounded-full m-[0.8em]"
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
