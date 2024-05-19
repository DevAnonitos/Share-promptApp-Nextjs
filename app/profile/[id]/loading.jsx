import React from 'react';
import Image from 'next/image';

// Create Loading Components
const Loading = () => {
    return (
        <div className='w-full flex-center'>
            <Image
                src='assets/icons/loader.svg'
                width={50}
                height={50}
                alt='loader'
                className='object-contain'
            />
        </div>
    );
};

export default Loading;
