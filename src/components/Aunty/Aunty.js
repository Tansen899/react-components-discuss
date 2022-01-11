import React from 'react';

const Aunty = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>Aunty</h2>
            <h3>House: {house}</h3>
        </div>
    );
};

export default Aunty;