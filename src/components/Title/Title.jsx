import React, { Children } from 'react';

const Title = ({children}) => {
    return (
        <div className='bg-linear-60 from-orange-100 to-blue-300 p-5 rounded-4xl'>
            <h1 className='font-bold text-5xl text-black'>{children}</h1>
        </div>
    );
};

export default Title;