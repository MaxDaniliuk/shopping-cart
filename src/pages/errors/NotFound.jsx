import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="text-3xl">
      <h1 className="mb-[2rem] mt-[4rem] text-[4rem]">Sorry</h1>
      <p className="mb-[1rem]">We couldn't find that page</p>
      <p className="mb-[0.5rem] mt-[0.5rem]">
        Go to the{' '}
        <Link to="/" className="text-[#1d4ed8] hover:text-[#1e3a8a]">
          Shop's home page
        </Link>
      </p>
    </div>
  );
}
