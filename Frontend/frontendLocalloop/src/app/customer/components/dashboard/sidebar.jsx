import { NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>

        {/* Logo */}

        <div className="sidebar-logo">

          <h3>
            <i className="bi bi-grid-1x2-fill me-2"></i>
            ServiceHub
          </h3>

        </div>

        {/* Navigation */}

        <ul className="sidebar-menu">

          <li>
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <i className="bi bi-speedometer2"></i>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/orders">
              <i className="bi bi-bag-check-fill"></i>
              My Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/categories">
              <i className="bi bi-grid-fill"></i>
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/subscriptions">
              <i className="bi bi-box-seam-fill"></i>
              Subscriptions
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/providers">
              <i className="bi bi-person-workspace"></i>
              Providers
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/wallet">
              <i className="bi bi-wallet2"></i>
              Wallet
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/payments">
              <i className="bi bi-credit-card-fill"></i>
              Payments
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/notifications">
              <i className="bi bi-bell-fill"></i>
              Notifications
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/profile">
              <i className="bi bi-person-circle"></i>
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/settings">
              <i className="bi bi-gear-fill"></i>
              Settings
            </NavLink>
          </li>

        </ul>

        {/* Bottom */}

        <div className="sidebar-bottom">

          <button className="logout-btn">

            <i className="bi bi-box-arrow-right"></i>

            Logout

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;