import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="error-page">
      <h1>Sorry</h1>
      <p>We couldn't find that page</p>
      <p>
        Go to the{' '}
        <Link to="/" className="text-[blue-950] underline">
          Shop's home page
        </Link>
      </p>
    </div>
  );
}
