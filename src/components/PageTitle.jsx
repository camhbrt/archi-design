import React from 'react';

const PageTitle = (props) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Maëlle Wohlgroth {props.page}</h1>
        </div>
    );
};

export default PageTitle;