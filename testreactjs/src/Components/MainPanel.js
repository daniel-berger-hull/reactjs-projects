import React from 'react';

import './MainPanel.css';


function MainPanel(props) {
    return (
        <div className='main-panel'>
            <div className='main-panel-header'>
                <span  className='main-panel-title-text'>{props.title}</span>
            </div>

            {props.children}
        </div>
    );
}

export default MainPanel;