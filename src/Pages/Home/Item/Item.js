import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({item}) => {
    const {_id, name,supplyName,quantity, img, description, price} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/item/${id}`);
    }
    return (
        <div className='item shadow-sm p-3 mb-5 bg-light rounded'>
            <img className='w-75 img-fluid h-50' src={img} alt="" />
            <h4>Item : {name}</h4>
            <h5>Supplier Name :{supplyName}</h5>
            <p>Price: {price}</p>
            <p>Quantity : {quantity}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetail(_id)} className='btn btn-success'>Check Item details</button>
        </div>
    );
};

export default Item;