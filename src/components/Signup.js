import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Signup = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const {signUp} = useUserAuth(); 

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("");
    try{
        await signUp(email, password);
        navigate("/")
    }catch(err){
        setError(err.message);
    }
  }

  return (
    <>
      <h1 className="p-4 box mt-3 text-center">SIGN UP</h1>
      <div className="d-flex justify-content-center align-items-center box">
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className="rounded p-4 p-sm-3 form-box" onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex align-items-center justify-content-center">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
