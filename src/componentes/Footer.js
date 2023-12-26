import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <div className="row">
            <p>By TonyDev© {today.getFullYear()}</p>

        </div>
    );
};




export default Footer;