import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [items,setItems]=useState({});
    useEffect(()=>{
        fetch(`https://desolate-river-99290.herokuapp.com/item/${itemId}`)
        .then(res=>res.json())
        .then(data=>setItems(data))
      },[])

      const decreseitem=()=>{
        const{_id,img,price,name,quantity,supplyName,description}=items;
        const url=`https://desolate-river-99290.herokuapp.com/item/${itemId}`;
        let value=quantity-1;
        //send to server side
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({quantity:value})
        })
          .then(res=>res.json())
          .then(data=>{
              setItems({...items,quantity:value})
           })
      }
      const handlequantity = event => {
        const{_id,img,price,name,quantity,supplyName,description}=items;
        event.preventDefault();
        const qtn=parseInt(event.target.quantity.value);
        let value=parseInt(quantity)+qtn;
        const url=`https://desolate-river-99290.herokuapp.com/item/${itemId}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({quantity:value})
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
            setItems({...items,quantity:parseInt(quantity)+(qtn)});
        })
      }

    return (
        <div>
            <div className="container mx-auto">
  <div className="row">
    <div className="col-12 col-lg-6 align-items-end">
    <img src={items.img} alt="" height={300} className='w-75 h-75 '/>
    </div>
    <div className="col-12 col-lg-6 mt-3">
    <h2 className='text-center text-success'> {items.name}</h2>
    <hr />
    <h3 className='text-start'>Supplier : {items.supplyName}</h3>
           <h4 className='text-start'>Item Price : {items.price}</h4>
           <h5 className='text-start'>Quantity : {items.quantity}</h5>
           <p className='text-start'>{items.description}</p>
           
           <div className='text-center'>
               
           <button onClick={decreseitem} className='btn btn-success mb-2'>Delivery</button>
           <form onSubmit={handlequantity}>
         <input type="number" name="quantity" id="" placeholder='Enter some quantity' className='w-100' />
           <input type="submit" value="Add Quantity" />
        </form>
              
           </div>
    </div>
  </div>
  </div>
            
        </div>
    );
};

export default ItemDetails;