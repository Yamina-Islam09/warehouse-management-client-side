import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='mt-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption  style={{color:'black'}} className='text-center'>
                    <h4 className="text-success">NEW COLLECTION</h4>
                    <h2>IPHONE LG G-3</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae. </p>
                    
                    <button type="button" className="btn btn-success">28997BDT</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption  style={{color:'black'}}>
                <h4 className="text-success">NEW COLLECTION</h4>
                    <h2>IPHONE P-12</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae. </p>
                    
                    <button type="button" className="btn btn-success">28997BDT</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption  style={{color:'black'}}>
                <h4 className="text-success">NEW COLLECTION</h4>
                    <h2>IPHONE P-10</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, repudiandae. </p>
                    
                    <button type="button" className="btn btn-success">28997BDT</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;