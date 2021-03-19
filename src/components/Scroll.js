import React from 'react';


const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll', 
            border: '1px solid rgba(78, 221, 150, .5)',
            height: '800px',
            }}>

            {props.children}
        </div>
    )
};


export default Scroll;