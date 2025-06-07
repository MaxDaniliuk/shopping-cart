import { NavLink, useLocation } from 'react-router-dom';

export default function CustomNavLink({ to, children }) {
  const location = useLocation();

  const handleClick = e => {
    if (location.pathname === to) {
      e.preventDefault();
    }
  };

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded border border-transparent p-[0.25em] hover:border-[#fafafa] ${isActive ? 'bg-[#fafafa] text-blue-950' : ''}`
      }
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
}
