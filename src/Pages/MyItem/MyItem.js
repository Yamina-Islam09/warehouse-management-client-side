import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItem =() => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const email = user.email;
    
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://desolate-river-99290.herokuapp.com/item/${id}`;
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
    useEffect( () => {
        // fetch(`https://desolate-river-99290.herokuapp.com/myitem?email=${email}`)
        // .then(res=>res.json())
        // .then(data=>setItems(data))
        
        const getItems = async() =>{
            const email = user?.email;
            const url = `https://desolate-river-99290.herokuapp.com/myitem?email=${email}`;
            
            try{
                const {data} = await axiosPrivate.get(url);
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your items: {items.length}</h2>
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
                    
                </div>)
            }
        </div>
    );
};

export default MyItem;