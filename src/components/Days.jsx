import React from 'react';

function Days({dayName}) {
    return (
        <div className="col text-center bold p-0">
            <div className="text-light" style={{width: '100%'}}>
                <h6>{dayName}</h6>
            </div>
        </div>
    )
}

export default Days;