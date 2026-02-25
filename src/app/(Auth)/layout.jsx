import React from 'react';

const AuthLayout = ({children}) => {
    return (
      <div className='flex  min-h-screen gap-5'>
        <div className='flex-2'>{children}</div>
        <div className='flex-1 bg-sky-900 font-bold text-2xl p-3'> this is AuthLayout</div>
      </div>
    );
};

export default AuthLayout;