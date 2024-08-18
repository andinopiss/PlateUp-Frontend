// src/App.js
import React from 'react';
import Header from './components/Header';
import Appointment from './components/Appointment';
import Lifestyle from './components/Lifestyle';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content-wrapper">
                <ImageCarousel />
                <Appointment />
            </div>
            <Lifestyle />
        </div>
    );
}

export default App;
