import { Link } from "react-router-dom";

function Topbar({ toggleSidebar }) {
  return (
    <header className="topbar">

      {/* Left */}

      <div className="topbar-left">

        <button
          className="menu-btn d-lg-none"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="search-box">

          <i className="bi bi-search"></i>

          <input
            type="text"
            placeholder="Search services, orders..."
          />

        </div>

      </div>

      {/* Right */}

      <div className="topbar-right">

        {/* Notifications */}

        <button className="top-icon position-relative">

          <i className="bi bi-bell"></i>

          <span className="notification-badge">
            3
          </span>

        </button>

        {/* Messages */}

        <button className="top-icon position-relative">

          <i className="bi bi-chat-dots"></i>

          <span className="notification-badge">
            5
          </span>

        </button>

        {/* User */}

        <div className="dropdown">

          <button
            className="profile-btn dropdown-toggle"
            data-bs-toggle="dropdown"
          >

            <img
              src="https://i.pravatar.cc/100"
              alt="User"
            />

            <div className="profile-info">

              <span className="profile-name">
                John Doe
              </span>

              <small>
                Customer
              </small>

            </div>

          </button>

          <ul className="dropdown-menu dropdown-menu-end shadow">

            <li>
              <Link
                className="dropdown-item"
                to="/dashboard/profile"
              >
                <i className="bi bi-person me-2"></i>
                My Profile
              </Link>
            </li>

            <li>
              <Link
                className="dropdown-item"
                to="/dashboard/settings"
              >
                <i className="bi bi-gear me-2"></i>
                Settings
              </Link>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <button className="dropdown-item text-danger">

                <i className="bi bi-box-arrow-right me-2"></i>

                Logout

              </button>
            </li>

          </ul>

        </div>

      </div>

    </header>
  );
}

export default Topbar;