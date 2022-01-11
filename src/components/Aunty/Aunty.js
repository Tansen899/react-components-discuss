import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Aunty = () => {
    const[ ornaments, house] = useContext(RingContext)
    return (
        <div>
            <h2>Aunty</h2>
            <h3>House: {house}</h3>
            <small>Orgaments:{ornaments}</small>
        </div>
    );
};

export default Aunty;