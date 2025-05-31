import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Sorry</h1>
      <p>We couldn't find that page</p>
      <p>
        Go to the <Link to="/">Shop's home page</Link>
      </p>
    </div>
  );
}
