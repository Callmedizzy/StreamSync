import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const navItems = [
  { to: "/", label: "Katalog" },
  { to: "/watch-party", label: "Watch Party" },
  { to: "/recommendations", label: "Rekomendasi AI" },
  { to: "/packages", label: "Paket Hemat" },
  { to: "/polls", label: "Polling Film" },
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="topbar">
      <div className="brand">StreamSync</div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="topbar-user">
        <span>{user?.name}</span>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;

