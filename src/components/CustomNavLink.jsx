import { NavLink } from 'react-router-dom';

export default function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `rounded border border-transparent p-[0.25em] hover:border-[#fafafa] ${isActive ? 'bg-[#fafafa] text-blue-950' : ''}`
      }
    >
      {children}
    </NavLink>
  );
}
