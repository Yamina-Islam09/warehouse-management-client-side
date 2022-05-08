import React from 'react';
import useItems from '../../hooks/useItems';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <h2>Manage your items</h2>
            {
                items.map(item => <div key={item._id}>
                <div className='border border-success d-flex align-items-center justify-content-evenly mb-5 '>
                <div>
                <img src={item.img} alt="" height={40} width={20}/>
                </div>
                <div><h4>{item.name} </h4></div>
                <button onClick={() => handleDelete(item._id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                </div>
                    
                </div>)
            }
            
           
        </div>
    );
};

export default ManageItems;