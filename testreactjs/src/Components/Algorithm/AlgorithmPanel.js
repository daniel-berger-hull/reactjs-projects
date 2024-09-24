import React from 'react';

import MainPanel from '../MainPanel.js';


function AlgorithmPanel(props) {
    return (

        <MainPanel title="Algo Solution">
            <span>Inside</span>
            <div id="solve-sequence-button"><button className='action-button'  onClick={props.solveSequenceButtonHandler}>Solve</button></div>

        </MainPanel>    
    );
}

export default AlgorithmPanel;