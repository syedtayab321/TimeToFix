// Navbar.js
import React from 'react';
import logo from '../../assets/images/logo_black.png';
import '../../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white custom-navbar">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <span className="navbar-title">Time to Fix it</span>
        </a>
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
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li className="dropdown-submenu">
                  <a className="dropdown-item dropdown-toggle" href="#">
                    AC Servicing & Repair
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Residential AC Repair</a></li>
                    <li><a className="dropdown-item" href="#">Commercial AC Repair</a></li>
                  </ul>
                </li>
                <li><a className="dropdown-item" href="#">Air Conditioning Replacement</a></li>
                <li><a className="dropdown-item" href="#">Duct Cleaning</a></li>
                <li><a className="dropdown-item" href="#">Electrical</a></li>
                <li><a className="dropdown-item" href="#">Plumbing</a></li>
                <li><a className="dropdown-item" href="#">Painting</a></li>
                <li><a className="dropdown-item" href="#">Handyman</a></li>
                <li><a className="dropdown-item" href="#">Water Tank Cleaning</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Annual Contract</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How We Compare</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
