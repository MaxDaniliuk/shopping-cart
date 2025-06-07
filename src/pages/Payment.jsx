import Button from '../components/Button';
import { Link, useOutletContext } from 'react-router-dom';

export default function Payment() {
  const [, setCartItems] = useOutletContext();

  return (
    <div>
      <h1>e-Store</h1>
      <div>
        <Button onClick={() => setCartItems([])}>
          <Link to="/">Pay</Link>
        </Button>
      </div>
      <div>
        <Button>
          <Link to="/products">Continue shopping</Link>
        </Button>
      </div>
    </div>
  );
}
