import React from 'react';
import logo from '../../assets/images/logo_black.png';
import '../../assets/css/navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white custom-navbar">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Time to Fix it</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li className="dropdown-submenu">
                  <Link className="dropdown-item dropdown-toggle" to="/acService">
                    AC Servicing & Repair
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#">Residential AC Repair</Link></li>
                    <li><Link className="dropdown-item" to="#">Commercial AC Repair</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="#">Air Conditioning Replacement</Link></li>
                <li><Link className="dropdown-item" to='/DuctCleaningService'>Duct Cleaning</Link></li>
                <li><Link className="dropdown-item" to="#">Electrical</Link></li>
                <li><Link className="dropdown-item" to="#">Plumbing</Link></li>
                <li><Link className="dropdown-item" to="#">Painting</Link></li>
                <li><Link className="dropdown-item" to="#">Handyman</Link></li>
                <li><Link className="dropdown-item" to="#">Water Tank Cleaning</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Annual Contract</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faqs">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comparison">How We Compare</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
