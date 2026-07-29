import Navbar from "../Navbar/Navbar";
import HeroImage from "../../assets/images/hero.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            {/* Left Content */}

            <div className="col-lg-6">

              <span className="hero-badge">
                Trusted Local Services
              </span>

              <h1 className="hero-title">
                Daily Essentials
                <br />
                Delivered To
                <span> Your Doorstep</span>
              </h1>

              <p className="hero-description">

                Subscribe to fresh milk, homemade tiffins,
                groceries and trusted home services from
                verified local providers.

              </p>

              {/* Search */}

              <div className="hero-search">

                <div className="input-group">

                  <span className="input-group-text">

                    <i className="bi bi-search"></i>

                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Milk, Tiffin, Electrician..."
                  />

                  <button className="btn search-btn">

                    Search

                  </button>

                </div>

              </div>

              {/* CTA */}

              <div className="hero-buttons">

                <button className="btn btn-primary-custom">

                  Explore Services

                </button>

                <button className="btn btn-outline-custom">

                  Become Provider

                </button>

              </div>

              {/* Stats */}

              <div className="hero-stats">

                <div>

                  <h3>500+</h3>

                  <p>Providers</p>

                </div>

                <div>

                  <h3>10K+</h3>

                  <p>Customers</p>

                </div>

                <div>

                  <h3>25+</h3>

                  <p>Services</p>

                </div>

              </div>

            </div>

            {/* Right Image */}

            <div className="col-lg-6">

              <div className="hero-image">

                <img
                  src={HeroImage}
                  alt="ServiceHub"
                />

                {/* Floating Cards */}

                <div className="floating-card milk">

                  🥛 Fresh Milk

                </div>

                <div className="floating-card tiffin">

                  🍱 Daily Tiffin

                </div>

                <div className="floating-card service">

                  🔧 Home Services

                </div>

              </div>

            </div>

          </div>
          

        </div>

      </section>
      {/* ===============================
        SERVICE CATEGORIES
================================ */}

<section className="categories-section">

  <div className="container">

    <div className="text-center mb-5">

      <span className="section-tag">
        OUR SERVICES
      </span>

      <h2 className="section-title">
        Explore Service Categories
      </h2>

      <p className="section-subtitle">
        Discover trusted local services delivered to your doorstep.
      </p>

    </div>

    <div className="row g-4">

      {/* Milk */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon milk-bg">
            🥛
          </div>

          <h5>Milk Delivery</h5>

          <p>
            Fresh milk delivered every morning.
          </p>

        </div>

      </div>

      {/* Tiffin */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon tiffin-bg">
            🍱
          </div>

          <h5>Tiffin Service</h5>

          <p>
            Healthy homemade meals every day.
          </p>

        </div>

      </div>

     

      {/* Delivery */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon delivery-bg">
            🚚
          </div>

          <h5>Delivery</h5>

          <p>
            Fast and reliable doorstep delivery.
          </p>

        </div>

      </div>

      {/* Electrician */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon electrician-bg">
            ⚡
          </div>

          <h5>Electrician</h5>

          <p>
            Verified electricians for home repairs.
          </p>

        </div>

      </div>

      {/* Plumber */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon plumber-bg">
            🚰
          </div>

          <h5>Plumber</h5>

          <p>
            Quick plumbing services anytime.
          </p>

        </div>

      </div>

      {/* Cleaning */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon cleaning-bg">
            🧹
          </div>

          <h5>Cleaning</h5>

          <p>
            Professional home cleaning services.
          </p>

        </div>

      </div>

      {/* Subscription */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon subscription-bg">
            📦
          </div>

          <h5>Subscriptions</h5>

          <p>
            Flexible monthly subscription plans.
          </p>

        </div>

      </div>



      {/* Subscription */}

      <div className="col-lg-3 col-md-4 col-6">

        <div className="category-card">

          <div className="category-icon trust-bg">
            <i className="bi bi-shield-check"></i>
          </div>

          <h5>Trusted Services</h5>

          <p>
             Verified providers with secure and reliable service.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
    </>
  );
}

export default Home;