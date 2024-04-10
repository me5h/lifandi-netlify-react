import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = () => {
    const [images, setImages] = useState(['/assets/long-exposure.jpg']);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [showClock, setShowClock] = useState(true);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = isAutoplay ? setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000) : null;

        return () => clearInterval(timer);
    }, [currentIndex, images.length, isAutoplay]);

    useEffect(() => {
        const clockTimer = showClock ? setInterval(() => {
            setCurrentTime(new Date());
        }, 1000) : null;

        return () => clearInterval(clockTimer);
    }, [showClock]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    // Method to add a new image to the slideshow
    const addImage = (imageUrl) => {
        setImages(prevImages => [...prevImages, imageUrl]);
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                {showClock && <div className="clock">{currentTime.toLocaleTimeString()}</div>}
            </div>
            <div className="controls">
                <button onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>Previous</button>
                <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>Next</button>
                <button onClick={toggleFullscreen}>Fullscreen</button>
            </div>
        </div>
    );
};

export default Slideshow;
