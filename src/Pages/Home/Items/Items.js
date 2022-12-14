import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';
import Loading from '../../Shared/Loading/Loading';

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('https://desolate-river-99290.herokuapp.com/item')
        .then(res => res.json())
        .then(data =>{
            setItems(data)} );
    }, [])

    return (
        <div id="items" className='container'>
         
            <div className="row">
            <h1 className='text-success text-center mt-3 mb-3'> Stored Items</h1>
            <div className="items-container">
           
        
             { items.map(item => <Item key={item._id} item={item}>
                </Item>)
            }
              
            </div>
            </div>
        </div>
    );
};

export default Items;