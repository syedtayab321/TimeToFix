import React from 'react';
import './../../assets/css/Maintainance.css';

const MaintenanceStats = () => {
    return (
        <div className="maintenance-stats text-center py-5">
            <h2 className="section-title">Dubai’s Leading Independent Maintenance Experts</h2>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="stat-icon badge-icon mb-3">
                            <i className="fas fa-award"></i>
                        </div>
                        <h4 className="stat-value">4.7</h4>
                        <p className="stat-description">Based on 1.5K+ Reviews</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="stat-value">253K+</h4>
                        <p className="stat-description">Jobs Completed Since 2008</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="stat-value">45K+</h4>
                        <p className="stat-description">Satisfied Customers</p>
                    </div>
                    <div className="col-md-3">
                        <h4 className="stat-value">12 Months</h4>
                        <p className="stat-description">Parts Warranty</p>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4">
                        <h4 className="stat-value">40+</h4>
                        <p className="stat-description">Teams on the Road</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="stat-value">3 Months</h4>
                        <p className="stat-description">Service Warranty</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="stat-value">24/7</h4>
                        <p className="stat-description">Support Available</p>
                    </div>
                </div>
            </div>
            <button className="quote-button">Get a Free Quote</button>
        </div>
    );
};

export default MaintenanceStats;
