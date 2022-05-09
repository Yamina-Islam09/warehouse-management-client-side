import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';
const LatestItem = () => {
 
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-center text-success mb-4">Reliable Buyers</h2>
     
      <div className=' text-center '>
      
      <Card>
  <Card.Header className='text-center borber border-success'>Buys feedback</Card.Header>
  <Card.Body>
  <blockquote className="blockquote mb-2">
      <p>
        {' '}
        They have also servicing offices.Their supply items are great and effortable{' '}
      </p>
      <footer className="blockquote-footer">
         <cite title="Source Title">Lamia Islam</cite>
      </footer>
    </blockquote>
    <blockquote className="blockquote mb-2">
      <p>
        {' '}
        They Delivered items into 64 districts.It is more useful{' '}
      </p>
      <footer className="blockquote-footer">
         <cite title="Source Title">Nowrin Islam</cite>
      </footer>
    </blockquote>
    <blockquote className="blockquote mb-2">
      <p>
        {' '}
        Their item collections are great,smarty and long lating product..they also give services if you face any problems
        {' '}
      </p>
      <footer className="blockquote-footer">
         <cite title="Source Title">Towhidul Islam</cite>
      </footer>
    </blockquote>
    <blockquote className="blockquote mb-2">
      <p>
        {' '}
        renowned brand!Must appreciatable .{' '}
      </p>
      <footer className="blockquote-footer">
       <cite title="Source Title">Ireen Akter</cite>
      </footer>
    </blockquote>
    <blockquote className="blockquote mb-2">
      <p>
        {' '}
        Amazing demandable Products.It is benefecial for wholesale business {' '}
      </p>
      <footer className="blockquote-footer">
      <cite title="Source Title">Yamina Islam</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
   

      </div>
    </div>
  );
};

export default LatestItem;
