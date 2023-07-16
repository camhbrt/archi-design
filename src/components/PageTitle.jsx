import React from 'react';

const PageTitle = (props) => {
    return (
        <div>
            <h1 className='text-3xl font-light'>Maëlle Wohlgroth {props.page}</h1>
        </div>
    );
};

export default PageTitle;