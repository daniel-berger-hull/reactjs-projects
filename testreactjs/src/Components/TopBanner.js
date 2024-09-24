import React from 'react';

import './TopBanner.css';

import bannerImager from '../Resources/header_bg.jpg';


function TopBanner() {
    return (
        <div className='TopBanner'>
            <img src={bannerImager} alt="bannerImager" />
        </div>
    );
}

export default TopBanner;