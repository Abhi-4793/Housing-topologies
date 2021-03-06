import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Auth } from "aws-amplify";



export default function Login() {
    
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await Auth.signIn(email, password);
      alert('Logged in');
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large" >
          <ControlLabel className="mail">Email </ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <br/>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel  className="pass">Password </ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <br/>
        <Button class="sub" block bsSize="large" disabled={!validateForm()} type="submit" >
          Login
        </Button>
      </form>
    </div>
  );
}