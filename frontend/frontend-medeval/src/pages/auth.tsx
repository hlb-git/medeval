import { Register, FetchPatients } from '../components/authentications';
import React, { useState } from 'react';
import illustration from '../assets/illustration.jpg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function Auth() {
  const [isSignup, setSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleView = () => setSignup((prev) => (!prev));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("payload:", formData);
    const response = Register(formData);
    console.log(response);
   }

  return (
      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{
          borderRadius: '25px', background: "#F1F0EE",
        }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6'
                className='order-2 order-lg-1 d-flex flex-column 
            justify-content-center align-items-center'
                style={{ height: '80vh', background: "#F1F0EE" }}>

                <form onSubmit={handleSubmit}>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">{
                  isSignup ? "Sign Up" : "Login"}</p>

                {isSignup ? (
                  <>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size='lg' />
                      <MDBInput 
                        label='Your Name' 
                        id='name' type='text' 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size='lg' />
                      <MDBInput 
                        label='Your Email' 
                        id='email'
                        type='email' 
                        value={formData.email}
                        onChange={handleChange} />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size='lg' />
                      <MDBInput 
                        label='Password' 
                        id='password'
                        type='password' 
                        value={formData.password}
                        onChange={handleChange}/>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size='lg' />
                      <MDBInput 
                        label='Repeat your password' 
                        id='repeatPassword' 
                        type='password'
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        />
                    </div>
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault'
                      label='Subscribe to our newsletter' />

                  </>
                ) : (
                  <>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="envelope me-3" size='lg' />
                      <MDBInput 
                        label='Your Email' 
                        id='email'
                        type='email' 
                        value={formData.email}
                        onChange={handleChange} />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size='lg' />
                      <MDBInput 
                        label='Password' 
                        id='password'
                        type='password' 
                        value={formData.password}/>
                    </div>
                  </>
                )}

                <div className='mb-4'>
                </div>

                <p className="small text-muted">
                  {isSignup ? "Already have an account?" : "Don't have an account?"}
                  <a href="#!" onClick={toggleView} className="text-primary ms-1">
                    {isSignup ? "Log in" : "Sign up"}
                  </a>
                </p>

                <MDBBtn className='mb-4' size='lg' type='submit'>Register</MDBBtn>

              </form>
              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage style={{ borderRadius: "20px" }} src={illustration} fluid />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
  );
};

  export default Auth;
