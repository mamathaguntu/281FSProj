import React, {useState} from 'react'
import { Card } from 'material-ui';
import {Form, Col, Button, InputGroup} from 'react-bootstrap';
import UserPool from './userPool'
import DatabaseAPI from './DatabaseAPI'
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';

function RegistrationPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState('');
    const onSubmit = event => {
    event.preventDefault();
    

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
        alert(err.message)
      if (!err){
        const userData = {firstName, lastName, email}
        DatabaseAPI.newUser(userData);
        alert('Registered successfully ! Proceed with Login')
      }
    });
  };

    return (
     
      <>
     
          <Form onSubmit={onSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4"  >
                <Form.Label className="text-white" name ="First Name">First name</Form.Label>
                <Form.Control required type="text" placeholder="First name" 
                value={firstName} onChange= {event=>setFirstName(event.target.value)}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label name="Last Name" className="text-white">Last name</Form.Label>
                <Form.Control required type="text" placeholder="Last name"
                value={lastName} onChange= {event=>setlastName(event.target.value)}/>
              </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} md="4">
                <Form.Label className="text-white" name= "Email">Email</Form.Label>
                <Form.Control required type="text" placeholder="Email"
                value={email} onChange= {event=>setEmail(event.target.value)}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formBasicPassword">
                <Form.Label name='Password' className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange= {event=>setPassword(event.target.value)}/>
              </Form.Group>
            </Form.Row>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree to the terms and conditions*" className="text-white" 
                value={agree} onChange={event=>setAgree(event.target.value)}/>
                I agree to the terms and conditions
              
              </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
          </>  
          
    )
}

export default RegistrationPage
