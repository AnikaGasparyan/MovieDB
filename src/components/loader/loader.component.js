import React from 'react';
import './loader.css';
export const LoadingScreen = () => {
    return(
        <div className="lds-facebook">
        {console.log('spinner')}
            <div></div>
            <div></div>
            <div></div>
        </div>    
    );
}