// Score.js

import React from 'react';
import '../App.css'

function Score (props) {

    const { score } = props;
 
        return (
            <div>
                <h2>Results</h2>
                <h4>Your score: {score}</h4>
            </div>
        );

}

export default Score;



