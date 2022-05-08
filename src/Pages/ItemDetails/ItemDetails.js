// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

    return (
        <div>
            <h2>You are about to book: {item.name}</h2>
            <img src={item.img} alt="" />
            <p>{item.quantity}</p>
            <p>{item.description}</p>
            <p>{item.supplyName}</p>
            <p>{item.price}</p>
            <div className='text-center'>
                
                    <button className='btn btn-primary'>Delivered</button>
               
            </div>
        </div>
    );
};

export default ItemDetails;