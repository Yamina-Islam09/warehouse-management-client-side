import React from "react";
import  { useEffect, useState } from 'react';
import Banner from "../Banner/Banner";
import Item from '../Item/Item'
import { Link } from "react-router-dom";
import './Home.css';
import LatestItem from "../LatestItem/LatestItem";
import JoinSupplierForm from "../JoinSupplierForm/JoinSupplierForm";
import Loading from '../../Shared/Loading/Loading';
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  useEffect( ()=>{
      fetch('http://localhost:5000/item')
      .then(res => res.json())
      .then(data =>{
        setIsLoading(false)
          setItems(data)} );
  }, [])
  return (
    <>
      <Banner></Banner>
      <div id="items" className='container'>
         
         <div className="row">
         <h1 className='text-success text-center mt-3 mb-3'> Stored Items</h1>
         <div className="items-container">
        
   { isLoading && <Loading></Loading>}
          { items.slice(0,6).map(item => <Item key={item._id} item={item}>
             </Item>)
         }
     
         </div>
         </div>
     </div>
     
        <div className='text-center'>
        
          <Link to="manage"><button type="button" className="btn btn-success">ManageItems</button></Link>
        </div>
        <LatestItem></LatestItem>
        <JoinSupplierForm></JoinSupplierForm>
      
    </>
  );
};

export default Home;
