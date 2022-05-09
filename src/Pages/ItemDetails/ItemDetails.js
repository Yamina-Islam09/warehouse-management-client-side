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
    <div class="col align-items-end">
    <img src={item.img} alt="" height={300} className='w-75 h-75 '/>
    </div>
    <div class="col  mt-3">
    <h2 className='text-center text-success'> {item.name}</h2>
    <hr />
    <h3 className='text-start'>Supplier : {item.supplyName}</h3>
           <h4 className='text-start'>Item Price : {item.price}</h4>
           <h5 className='text-start'>Quantity : {item.quantity}</h5>
           <p className='text-start'>{item.description}</p>
           
           <div className='text-center'>
               
                   <button className='btn btn-success w-100'>Sold</button>
                   <form className='mt-2 mb-5'>
                   <input type="number" className='mb-2 w-100' name="" id="" />
                   <button className='btn btn-success w-100'>Restock</button>
                   </form>
              
           </div>
    </div>
  </div>
  </div>
            
        </div>
    );
};

export default ItemDetails;