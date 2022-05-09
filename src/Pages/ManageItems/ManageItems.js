import React from 'react';
import useItems from '../../hooks/useItems';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'; 
const ManageItems = () => {
    const [items, setItems] = useItems();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            
            <div className='text-center mt-5 mb-5'>
        
        <Link to="/additem"><button type="button" className="btn btn-success w-50">Add Your Item</button></Link>
        <h2 className='text-center text-success mt-3'>Manage your items</h2>
      </div>
            {
                items.map(item => <div key={item._id}>
                <div className='border border-success d-flex align-items-center justify-content-evenly mb-2 p-2'>
                <div>
                <img src={item.img} alt="" height={40} width={30}/>
                </div>
                <div><h4>{item.name} </h4></div>
                <button className='btn btn-success' onClick={() => handleDelete(item._id)}>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                </div>
                </div>
                )
            }
            
            
                
        </div>
    );
};

export default ManageItems;