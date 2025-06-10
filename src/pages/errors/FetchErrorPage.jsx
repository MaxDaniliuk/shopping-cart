import { useRouteError, Link } from 'react-router-dom';

export default function FetchErrorPage({ message }) {
  const error = useRouteError();
  return (
    <div className="text-3xl">
      <h2 className="mt-[4rem]">
        <span className="mb-[2rem] mt-[1rem] block text-[4rem]">Oops!</span>{' '}
        <span className="mb-[0.5rem] mt-[0.5rem] block">{message}</span>
      </h2>
      <p>
        Go to the{' '}
        <Link to="/" className="hover:text-#172554] text-[#1e3a8a]">
          Shop's home page
        </Link>
      </p>
    </div>
  );
}
