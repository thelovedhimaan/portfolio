import React from 'react';

const Loading = () => {
    return ( 
        <div className="text-center spinner-grow text-dark" style={{width: "50px", height: "50px"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
     );
}
 
export default Loading;