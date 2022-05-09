import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `https://desolate-river-99290.herokuapp.com/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{ } )

    };


    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center mt-3 text-success mb-2'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Email' {...register("email")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("supplyName", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Item" className='btn btn-success' />
            </form>
        </div>
    );
};

export default AddItem;