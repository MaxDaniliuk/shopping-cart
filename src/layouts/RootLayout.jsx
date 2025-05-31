import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>My cook e-commerce</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}
