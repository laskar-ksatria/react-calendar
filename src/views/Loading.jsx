import React from 'react';
import ReactLoading from "react-loading";


function LoadingDashboard() {
    return (
        <div className="bg-dark" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>
            <ReactLoading  type="spokes" color="gold" />
        </div>
    )
};

export default LoadingDashboard;