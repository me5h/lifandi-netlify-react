// Clock.js
import React, { useEffect, useState } from 'react';
import './clock.css'; // Create and use clock-specific styles

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div className="clock">
            {time.toLocaleTimeString()} {/* Adjust format as needed */}
        </div>
    );
};

export default Clock;
