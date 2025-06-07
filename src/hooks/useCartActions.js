import { useCallback } from 'react';

export default function useCartActions(setCartItems) {
  const incrementItem = useCallback(productId => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId ? { ...item, inCart: item.inCart + 1 } : item,
      ),
    );
  }, []);

  const decrementItem = useCallback(productId => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId ? { ...item, inCart: item.inCart - 1 } : item,
      ),
    );
  }, []);

  const removeItem = useCallback(productId => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== productId),
    );
  }, []);

  return { incrementItem, decrementItem, removeItem };
}
