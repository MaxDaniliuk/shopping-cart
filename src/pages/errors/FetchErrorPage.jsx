import { useRouteError, Link } from 'react-router-dom';

export default function FetchErrorPage({ message }) {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops! Something went wrong. {message}</h2>
      <p>
        Go to the{' '}
        <Link to="/" className="text-[blue-950] underline">
          Shop's home page
        </Link>
      </p>
    </div>
  );
}
