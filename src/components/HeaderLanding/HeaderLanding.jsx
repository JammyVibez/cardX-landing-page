import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./HeaderLanding.css";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <header className="anime-header">
      <div className="logo">
        <span className="logo-glow">🌸CardX</span>
      </div>

      <nav className="nav-links">
      <Link to="/explore">
        <a href="#carousel">Explore</a>
        </Link>
        <Link to="/features">
        <a href="#features">Features</a>
        </Link>
      </nav>

      {/* <div className="theme-toggle" onClick={() => setDarkTheme(!darkTheme)}>
        <div className={`switch ${darkTheme ? "dark" : "light"}`}>
          <span>{darkTheme ? "🌙" : "☀️"}</span>
        </div>
      </div> */}

      <div className="sign-action">
        <div className="login floating">
            <span className="login-text">Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
