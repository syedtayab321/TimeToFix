import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../../assets/css/services.css';
import plumberImage from  '././../../assets/services_images/plumbing.jpg';
import electricalImage from '././../../assets/services_images/electrical.jpg';
import acImage from './../../assets/services_images/Ac_Repair.jpg';
import paintingImage from './../../assets/services_images/painting.jpg';
import waterTankImage from './../../assets/services_images/watertank.jpg';
const servicesData = [
    {
        id: 1,
        title: 'Plumbing Services',
        description: 'Expert plumbing solutions for homes and businesses.',
        imageUrl: plumberImage,
    },
    {
        id: 2,
        title: 'Electrical Services',
        description: 'Professional electrical installation and repair services.',
        imageUrl: electricalImage,
    },
    {
        id: 3,
        title: 'AC Maintenance',
        description: 'High-quality AC maintenance and repair services.',
        imageUrl: acImage,
    },
    {
        id: 4,
        title: 'Painting Services',
        description: 'Residential and commercial painting services.',
        imageUrl: paintingImage,
    },
    {
        id: 5,
        title: 'Water Tank Cleaner',
        description: 'Residential and commercial Electric services.',
        imageUrl: waterTankImage,
    },
    {
        id: 6,
        title: 'Electric Services',
        description: 'Residential and commercial Electric services.',
        imageUrl: electricalImage,
    },
];

const Services = () => {
    const navigate = useNavigate();

    const handleServiceClick = (id) => {
        navigate(`/servicedetails`);
    };

    return (
        <div className="services-section py-5">
            <div className="container">
                <h2 className="text-center section-title">Our Services</h2>
                <div className="row">
                    {servicesData.map((service) => (
                        <div key={service.id} className="col-md-6 col-lg-4 mb-4">
                            <div className="service-card" onClick={() => handleServiceClick(service.id)}>
                                <img src={service.imageUrl} alt={service.title} className="service-image" />
                                <div className="service-content">
                                    <h5 className="service-title">{service.title}</h5>
                                    <p className="service-description">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
