import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';

const ItemDetails = () => {
    // const [quantity,setQuantity]=useState({});
    const { itemId } = useParams();
    const [item,setItem] = useItemDetail(itemId);


    const handleIncrease = event =>{
        event.preventDefault();
        const inputQuantity = event.target.name.value;
        console.log(inputQuantity);
       const newQuantity=parseInt(inputQuantity)+parseInt(item.quantity);
       const newItems={...item,quantity:newQuantity};
       console.log(newQuantity);
       console.log(newItems);


        // send data to the server
        const url = `http://localhost:5000/item/${itemId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItems)
        })
        .then(res => res.json())
        .then(data =>{
            console.log( data);
           setItem(newItems);
            event.target.reset();
        })
    }

    return (
        <div>
            <div className="container mx-auto">
  <div className="row-12 row-md-6">
    <div className="col align-items-end">
    <img src={item.img} alt="" height={300} className='w-75 h-75 '/>
    </div>
    <div className="col  mt-3">
    <h2 className='text-center text-success'> {item.name}</h2>
    <hr />
    <h3 className='text-start'>Supplier : {item.supplyName}</h3>
           <h4 className='text-start'>Item Price : {item.price}</h4>
           <h5 className='text-start'>Quantity : {item.quantity}</h5>
           <p className='text-start'>{item.description}</p>
           
           <div className='text-center'>
               
                   <button className='btn btn-success w-100'>Deliver</button>
                   <form className='mt-2 mb-5' onSubmit={handleIncrease}>
                   <input type="number" className='mb-2 w-100' name="restock" id="" />
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