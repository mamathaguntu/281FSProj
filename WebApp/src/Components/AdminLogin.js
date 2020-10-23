import React, {useState} from 'react'
import {Card, Form, Col, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

function AdminLogin(props) {
    const [password, setPassword] = useState('');
    let history = useHistory();
    const onSubmit = e => {
        if (password !== 'admin'){
            alert("Incorrect Password, Try again")
        }
        else {
            history.push('/adminPage')
        }
    }
    return (
        <div>
           <Card className = 'bg-dark text-white'>
            <Form>
            <Card.Body>
            <Form.Row>
            <Form.Group as={Col} md={7} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value='admin@mgproj.com' className='text-muted'/>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md={7} controlId="formBasicPassword">
                <Form.Label name='Password'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange= {event=>setPassword(event.target.value)}/>
            </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" onClick={onSubmit}> Login</Button>
            </Card.Body>
            </Form>
            </Card> 
        </div>
    )
}

export default AdminLogin
