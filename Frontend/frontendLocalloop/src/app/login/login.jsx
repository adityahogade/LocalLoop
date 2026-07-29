import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../assets/images/signupimg.jpg";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-left">

        <img src={loginImage} alt="ServiceHub" />

        <h1>Welcome Back!</h1>

        <p>
          Login to access Milk Delivery, Tiffin Services,
          Local Vendors and much more.
        </p>

      </div>

      <div className="login-right">

        <div className="login-card">

          <h2>Login</h2>

          <p>Sign in to continue</p>

          <form>

            <div className="input-box">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
              />

            </div>

            <div className="input-box">

              <label>Password</label>

              <div className="password-box">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                />

                <span
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </span>

              </div>

            </div>

            <div className="login-options">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="/">Forgot Password?</a>

            </div>

            <button className="login-btn">
              Login
            </button>

          </form>

          <div className="signup-text">

            Don't have an account?

            <Link to="/signup"> Sign Up</Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;