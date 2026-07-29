import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logoimg from "../../assets/images/logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">

      <div className="container">

        {/* Logo */}

        <Link className="navbar-brand d-flex align-items-center" to="/">

          <img
            src={logoimg}
            alt="ServiceHub"
            className="logo"
          />

          <span className="brand-name">
            ServiceHub
          </span>

        </Link>

        {/* Mobile Button */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >

          <i className="bi bi-list"></i>

        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse"
          id="navbarMenu"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link"
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/subscriptions"
                className="nav-link"
              >
                Subscription
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/providers"
                className="nav-link"
              >
                Providers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
              >
                Contact
              </NavLink>
            </li>

          </ul>

          {/* Right Buttons */}

          <div className="d-flex gap-3">

            <Link
              to="/login"
              className="btn btn-login"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="btn btn-register"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;