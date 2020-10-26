import React, {useState} from 'react'
import {Auth} from 'aws-amplify'
import {useHistory} from 'react-router-dom'
import {Card, Container,  Form, Button, Col, FormGroup} from 'react-bootstrap'

function ConfirmUser({email}) {
    const [code, setCode] = useState('')
    let history = useHistory();

    async function onSubmit (e) {
        e.preventDefault();
        try {
            await Auth.confirmSignUp(email, code);
          } catch (error) {
              console.log('error confirming sign up', error);
          }
          history.push('/login')
      };
    return (
        <div>
            <Card className = 'bg-dark text-white'>
            <Form>
            <Card.Body>
            <Form.Row>
            <Form.Group as={Col} md={7} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <h7>{email}</h7>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md={7} controlId="formBasicPassword">
                <Form.Label name='Password'>Password</Form.Label>
                <Form.Control type="password" placeholder="Code" value={code} onChange= {event=>setCode(event.target.value)}/>
            </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" onClick={onSubmit}> Confirm sign-up</Button>
            </Card.Body>
            </Form>
            </Card>
        </div>
    )
}

export default ConfirmUser
