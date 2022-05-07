import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-light p-4 mt-2" style={{minHeight:'10vh'}} >
      <div className="d-flex align-items-center justify-content-center">
        <p className='mx-2'>MoBile Store</p>
        <p className='mx-2'>2291 2nd Avenue, New York, NY, 10035 212.426.9400</p>
        <p className='mx-2'> info@acquolinacatering.com</p>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <p className='mx-2'>Join Our Team</p>
        <p className='mx-2'>Privacy Policy</p>
        <p className='mx-2'>Terms and Conditions</p>
        <p className='mx-2'>Website Disclaimer</p>
      </div>
    </div>
  );
};

export default Footer;