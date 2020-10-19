import React, {useState} from 'react'
import { Card } from 'material-ui';
import {Form, Col, Button, InputGroup} from 'react-bootstrap'



function RegistrationPage() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

    const onSubmit = (e) => {
      
    }

    return (
         
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="text-white" name ="First Name">First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label name="Last Name" className="text-white">Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label className="text-white" name= "User Name">Username</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="3" controlId="formBasicPassword">
                <Form.Label name='Password' className="text-white">Password</Form.Label>
                  <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="formBasicPassword">
                <Form.Label name='Re-enter Password' className="text-white">Re-enter Password</Form.Label>
                  <Form.Control type="password" placeholder="Re-enter Password"/>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to the terms and conditions*" className="text-white"/>I agree to the terms and conditions
            </Form.Group>
            <Button type="submit" onClick={this.onSubmit}>Submit</Button>
             </Form>
            
          
    )
}

export default RegistrationPage
