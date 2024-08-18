// src/components/Lifestyle.js
import React, { useRef, useEffect } from 'react';
import './Lifestyle.css';

const Lifestyle = () => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -carouselRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: carouselRef.current.offsetWidth,
                behavior: 'smooth'
            });
        }
    };

    // Auto-scroll feature
    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 3000); // Scroll every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const lifestyles = {
        Nutrition: [
            { img: '/nutrition.jpg', title: 'Nutrition', text: 'Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.', metric: '121/80 mmHg', metricIcon: '/icons/blood-pressure-icon.svg' }
        ],
        'Physical activity': [
            { img: '/physical-activity.jpg', title: 'Physical activity', text: 'Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.', metric: '32 minutes', metricIcon: '/icons/heart-rate-icon.svg' }
        ],
        'Restorative sleep': [
            { img: '/sleep.jpg', title: 'Restorative sleep', text: 'Consistent, quality sleep is essential for cognitive function and physical health.', metric: '8 hours', metricIcon: '/icons/sleep-icon.svg' }
        ],
        'Stress management': [
            { img: '/stress-management.jpg', title: 'Stress management', text: 'Effective stress management techniques are crucial for mental well-being and overall health.', metric: '60 bpm', metricIcon: '/icons/heart-rate-icon.svg' }
        ],
        'Social connection': [
            { img: '/social-connection.jpg', title: 'Social connection', text: 'Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.', metric: 'Feeling better', metricIcon: '/icons/social-icon.svg' }
        ],
        'Substance abuse': [
            { img: '/substance-abuse.jpg', title: 'Substance abuse', text: 'Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.', metric: '62 days', metricIcon: '/icons/calendar-icon.svg' }
        ]
    };

    const tabs = Object.keys(lifestyles);

    return (
        <section className="lifestyle-section">
            <h2>HOW IT WORKS</h2>
            <h1>
                <span className="gradient-text">Lifestyle as medicine:</span> The six pillars
            </h1>
            <div className="lifestyle-tabs">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        className={`lifestyle-tab ${tab === 'Nutrition' ? 'active' : ''}`}
                        onClick={() => carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="lifestyles-carousel-container">
                <button className="nav-arrow left-arrow" onClick={scrollLeft}>
                    {'<'}
                </button>
                <div className="lifestyles-carousel" ref={carouselRef}>
                    {tabs.map((tab) =>
                        lifestyles[tab].map((lifestyle, index) => (
                            <div key={index} className="lifestyle-card">
                                <img src={lifestyle.img} alt={lifestyle.title} />
                                <div className="lifestyle-metric">
                                    <img src={lifestyle.metricIcon} alt={lifestyle.metric} />
                                    <span>{lifestyle.metric}</span>
                                </div>
                                <h3>{lifestyle.title}</h3>
                                <p>{lifestyle.text}</p>
                            </div>
                        ))
                    )}
                </div>
                <button className="nav-arrow right-arrow" onClick={scrollRight}>
                    {'>'}
                </button>
            </div>
        </section>
    );
};

export default Lifestyle;
