import Button from '../components/Button';
import { Link, useOutletContext } from 'react-router-dom';

export default function Payment() {
  const [, setCartItems] = useOutletContext();

  return (
    <div className="mt-8 min-w-60 p-2 text-center">
      <h1 className="mb-[0.2em] text-[2rem] font-bold">e-Store</h1>
      <div className="p-2">
        <div>
          <Button
            onClick={() => setCartItems([])}
            style="py-[0.3em] px-[0.75em] bg-[#facc15] hover:bg-[#fbbf24] rounded-full w-full mb-[1em]"
          >
            <Link to="/">Pay</Link>
          </Button>
        </div>
        <div>
          <Button style="py-[0.3em] px-[0.75em] bg-[#facc15] hover:bg-[#fbbf24] rounded-full w-full mb-[1em]">
            <Link to="/products">Continue shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
