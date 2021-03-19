import React from 'react';


export const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className='pa2'>
            <input
                type='search'
                placeholder='Search'
                className='pa3 ba b--blue bg-lightest-blue'
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;