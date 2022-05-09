// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);

    return (
        <div>
            <div class="container mx-auto">
  <div class="row">
    <div class="col">
    <img src={item.img} alt="" />
    </div>
    <div class="col">
    <h2>You are about to book: {item.name}</h2>
           
           <p>{item.quantity}</p>
           <p>{item.description}</p>
           <p>{item.supplyName}</p>
           <p>{item.price}</p>
           <div className='text-center'>
               
                   <button className='btn btn-success w-100'>Sold</button>
                   
                   <button className='btn btn-success w-100'>Restock</button>
              
           </div>
    </div>
  </div>
  </div>
            
        </div>
    );
};

export default ItemDetails;