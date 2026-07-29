import { useState } from "react";
import { Link } from "react-router-dom";
import SignupImage from "../../assets/signupimg.jpg";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="signup-page">
      <div className="container">

        <div className="row signup-card shadow-lg">

          {/* ================= Left Section ================= */}

          <div className="col-lg-6 signup-left d-none d-lg-flex">

            <div className="signup-left-content">

              <div className="brand-logo">

                <div className="logo-circle">
                  <i className="bi bi-shop"></i>
                </div>

                <h4>ServiceHub</h4>

              </div>

              <h1>
                Local Services,
                <br />
                Delivered Daily.
              </h1>

              <p className="welcome-text">

                Join India's trusted platform for daily essentials.

                Subscribe to fresh milk, homemade tiffins, groceries,

                and local home services from verified providers.

              </p>

              <div className="feature-list">

                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Fresh Milk Subscription
                </div>

                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Homemade Tiffin Services
                </div>

                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Verified Local Providers
                </div>

                <div className="feature-item">
                  <i className="bi bi-check-circle-fill"></i>
                  Monthly Subscription Plans
                </div>

              </div>

              <img
                src={SignupImage}
                alt="ServiceHub"
                className="signup-image"
              />

              <div className="service-icons">

                <div>
                  <i className="bi bi-cup-hot-fill"></i>
                  <span>Milk</span>
                </div>

                <div>
                  <i className="bi bi-basket-fill"></i>
                  <span>Groceries</span>
                </div>

                <div>
                  <i className="bi bi-box-seam-fill"></i>
                  <span>Delivery</span>
                </div>

                <div>
                  <i className="bi bi-house-heart-fill"></i>
                  <span>Home</span>
                </div>

              </div>

            </div>

          </div>

          {/* ================= Right Section ================= */}

          <div className="col-lg-6 signup-right">

            <div className="signup-form">

              <h2>Create Account</h2>

              <p className="text-muted mb-4">
                Create your ServiceHub account
              </p>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      First Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Last Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Mobile Number
                  </label>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91 9876543210"
                  />

                </div>

                <div className="mb-3 position-relative">

                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter Password"
                  />

                  <i
                    className={`bi ${
                      showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                    } password-icon`}
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  ></i>

                </div>

                <div className="mb-3 position-relative">

                  <label className="form-label">
                    Confirm Password
                  </label>

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    className="form-control"
                    placeholder="Confirm Password"
                  />

                  <i
                    className={`bi ${
                      showConfirmPassword
                        ? "bi-eye-slash-fill"
                        : "bi-eye-fill"
                    } password-icon`}
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                  ></i>

                </div>

                <div className="form-check mb-4">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="terms"
                  >
                    I agree to the
                    <span className="terms-link">
                      {" "}Terms & Conditions
                    </span>
                  </label>

                </div>

                <button
                  type="submit"
                  className="btn signup-btn w-100"
                >
                  Create Account
                </button>

              </form>

              {/* Divider */}

              <div className="divider">
                <span>OR</span>
              </div>

            


              <p className="login-text">

                Already have an account?

                <Link to="/login">
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Signup;