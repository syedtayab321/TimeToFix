import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/home.css';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/quote');
  }

  return (
    <div className="home-container">
      <div className="home-overlay">
        <h1 className="home-title">Welcome to Time To Fix</h1>
        <h5 className="home-subtitle">Reliable home services, just one call away</h5>
        <button className="btn btn-primary btn-lg home-button" onClick={handleClick}>
          Get a Free Quote
        </button>
      </div>
    </div>
  );
}
