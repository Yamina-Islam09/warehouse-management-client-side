import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
  const [agree,setAgree]=useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  
  const navigateLogin = (event) => {
    navigate("/login");
  };
  if(user){
   console.log(user);
  }
  if(loading || updating){
    return <Loading></Loading>
}
  const handleRegister = async (event) => {
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;
  
    await  createUserWithEmailAndPassword(email,password)
    await updateProfile({ displayName: name });
    navigate('/home');
    
  };
  
  return (
    <div className="container mx-auto w-50 border border-success mt-5 p-5">
      <h2 className="text-center mt-2" style={{color:'black'}}> Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            name='name'
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name='email'
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name='password'
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Mobile STore Terms and Conditions</label>
        </Form.Group>
        <Button variant="primary" type="submit" className='w-100 mx-auto btn btn-success mt-2' disabled={!agree}  style={{color:'black'}}>
          Register
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
         
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
     
    </div>
    
  );
};

export default Register;