import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Icon from "./Icon";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <NavLink
            to="/"
            className="brand"
            aria-label="Aderinsola Daniel, home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-mark">AD</span>
            <span className="brand-name">
              Aderinsola Daniel<span className="brand-dot">.</span>
            </span>
          </NavLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={21} />
          </button>
          <nav
            className={`main-nav ${menuOpen ? "nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              className="nav-social"
              href="https://github.com/Dandizzy67"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Icon name="github" size={19} />
            </a>
          </nav>
        </div>
      </header>

      <main className="page-main" key={location.pathname}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 Aderinsola Daniel. Built with React.</span>
          <a
            href="https://github.com/Dandizzy67"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Aderinsola's GitHub profile"
          >
            <Icon name="github" size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
