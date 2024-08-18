// src/components/ImageCarousel.js
import React, { useEffect, useRef } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
    const carousel1Ref = useRef(null);
    const carousel2Ref = useRef(null);

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (carousel1Ref.current) {
                carousel1Ref.current.scrollTop += 1;
                if (carousel1Ref.current.scrollTop >= carousel1Ref.current.scrollHeight / 2) {
                    carousel1Ref.current.scrollTop = 0;
                }
            }
        }, 20);

        const interval2 = setInterval(() => {
            if (carousel2Ref.current) {
                carousel2Ref.current.scrollTop -= 1;
                if (carousel2Ref.current.scrollTop <= 0) {
                    carousel2Ref.current.scrollTop = carousel2Ref.current.scrollHeight / 2;
                }
            }
        }, 20);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []);

    return (
        <div className="image-carousel-container">
            <div className="carousel" ref={carousel1Ref}>
                <img src="/img1.jpg" alt="Image 1" />
                <img src="/img2.jpg" alt="Image 2" />
                <img src="/img3.jpg" alt="Image 3" />
                <img src="/img4.jpg" alt="Image 4" />
                <img src="/img1.jpg" alt="Image 1" />
                <img src="/img2.jpg" alt="Image 2" />
                <img src="/img3.jpg" alt="Image 3" />
                <img src="/img4.jpg" alt="Image 4" />
            </div>
            <div className="carousel" ref={carousel2Ref}>
                <img src="/img5.jpg" alt="Image 5" />
                <img src="/img6.jpg" alt="Image 6" />
                <img src="/img7.jpg" alt="Image 7" />
                <img src="/img8.jpg" alt="Image 8" />
                <img src="/img5.jpg" alt="Image 5" />
                <img src="/img6.jpg" alt="Image 6" />
                <img src="/img7.jpg" alt="Image 7" />
                <img src="/img8.jpg" alt="Image 8" />
            </div>
        </div>
    );
};

export default ImageCarousel;
