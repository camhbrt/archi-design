import React from 'react';

const PageTitle = (props) => {
    return (
        <div>
            <h1 className='text-4xl font-medium text-center text-yellow-400 bg-black pb-2'>Maëlle Wohlgroth {props.page}</h1>
        </div>
    );
};

export default PageTitle;