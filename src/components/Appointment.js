// src/components/Appointment.js
import React from 'react';
import './Appointment.css';
import ImageCarousel from './ImageCarousel'; // Assuming ImageCarousel is for the left side images

const Appointment = () => {
    return (
        <section className="appointment-section">
            <div className="content">
                <div className="text-content">
                    <h1>Book an appointment with <br /> <span className="gradient-text">lifestyle medicine</span> experts</h1>
                    <p>Optimize your lifestyle and reverse chronic diseases.</p>
                </div>
                <div className="appointment-form">
                    <div className="input-container">
                        <span className="icon"><img src="/icons/search-icon.svg" alt="Search Icon" /></span>
                        <input type="text" placeholder="Condition, procedure, speciality..." />
                    </div>
                    <div className="input-container">
                        <span className="icon"><img src="/icons/location-icon.svg" alt="Location Icon" /></span>
                        <input type="text" placeholder="City, state, or zipcode" />
                    </div>
                    <div className="input-container">
                        <span className="icon"><img src="/icons/insurance-icon.svg" alt="Insurance Icon" /></span>
                        <input type="text" placeholder="Insurance carrier" />
                    </div>
                    <button className="find-button">
                        <span className="icon"><img src="/icons/search-icon-white.svg" alt="Search Icon" /></span>
                        Find now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
