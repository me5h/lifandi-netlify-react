// UploadDrawer.js
import React from 'react';
import Drawer from '@mui/material/Drawer';

const UploadDrawer = ({ isOpen, toggleDrawer }) => {
    return (
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
            <div className="upload-controls">
                {/* Your upload form and controls go here */}
            </div>
        </Drawer>
    );
};

export default UploadDrawer;
