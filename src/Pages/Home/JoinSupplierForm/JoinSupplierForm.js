import React from 'react';

const JoinSupplierForm = () => {
    return (
        <div id='join' className='container mx-auto mt-5 border border-success'>
            <h2 className='text-center text-success mt-4 mb-5'>Join Supplier Team </h2>
         <form className="row g-3 needs-validation" novalidate>
  <div className="col-md-6">
    <label for="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder='First Name' required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder='First Name' required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>

  <div className="col-md-6">
    <label for="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" placeholder='City' required/>
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationCustom04" className="form-label">State</label>
    <select className="form-select" id="validationCustom04"  required>
      <option selected disabled value="">Choose...</option>
      <option>Dhaka</option>
      <option>Chittagong</option>
      <option>Barishal</option>
      <option>Sylthet</option>
    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className='col-md-6'>
  <div class="mb-3">
  <label for="formFile" class="form-label">Your CV Or Resume</label>
  <input class="form-control" type="file" id="formFile"/>
</div>
  </div>
  
  <div className="col-md-6">
    <label for="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" required/>
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label className="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-success mb-3 " type="submit">Submit form</button>
  </div>
</form>   
        </div>
    );
};

export default JoinSupplierForm;