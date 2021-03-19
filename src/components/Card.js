import React from 'react';


const Card = ({username, name, email, id}) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img  alt='robots' src={`https://robohash.org/${id}?150X150`}/>
            <div className='tc'>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card

