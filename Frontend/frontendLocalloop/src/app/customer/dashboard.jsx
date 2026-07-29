import { useState } from "react";
import "./Dashboard.css";

import Sidebar from "./components/dashboard/sidebar";
import Topbar from "../../components/dashboard/Topbar";
import DashboardCards from "../../components/dashboard/DashboardCards";
import RecentOrders from "../../components/dashboard/RecentOrders";
import NearbyProviders from "../../components/dashboard/NearbyProviders";
import SubscriptionCard from "../../components/dashboard/SubscriptionCard";
import ProfileCard from "../../components/dashboard/ProfileCard";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div className="dashboard-main">

        {/* Top Navigation */}
        <Topbar toggleSidebar={toggleSidebar} />

        {/* Dashboard Content */}
        <div className="container-fluid dashboard-content">

          {/* Welcome */}
          <div className="dashboard-header mb-4">

            <div>
              <h2 className="fw-bold mb-2">
                Welcome Back 👋
              </h2>

              <p className="text-muted">
                Manage your bookings, subscriptions and nearby services.
              </p>
            </div>

          </div>

          {/* Statistics */}
          <DashboardCards />

          {/* Main Grid */}
          <div className="row mt-4">

            {/* Left */}
            <div className="col-lg-8">

              <RecentOrders />

              <NearbyProviders />

            </div>

            {/* Right */}
            <div className="col-lg-4">

              <SubscriptionCard />

              <ProfileCard />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;