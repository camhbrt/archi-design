import React from 'react';

const PageTitle = (props) => {
    return (
        <div>
            <h1 className='text-3xl font-light text-center  pb-2'>Maëlle Wohlgroth {props.page}</h1>
        </div>
    );
};

export default PageTitle;