import React from 'react';
import loading from '../../image/spinnergif.gif'
const Loading = () => {
    return (
        <div style={{height:"80vh"}} className='d-flex  justify-content-center align-items-center'>
           <img src={loading} alt="" style={{width:"80px"}} />
        </div>
    );
};

export default Loading;