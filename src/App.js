// App.js
import React, { useState } from 'react';
import Slideshow from './Slideshow';
import UploadDrawer from './UploadDrawer';
import Clock from './Clock';
import Button from '@mui/material/Button';

function App() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="App">
            <Slideshow />
            <Clock /> {/* Clock is now a separate component */}
            <UploadDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <Button onClick={toggleDrawer}>Toggle Upload Drawer</Button>
        </div>
    );
}

export default App;
