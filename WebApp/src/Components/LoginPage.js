import React, {useState, useContext} from 'react'
import {Card, Container,  Form, Button, Col, FormGroup} from 'react-bootstrap'
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js"
import {Link, ReactDOM, useHistory} from 'react-router-dom'
import RegistrationPage from './RegistrationPage'
import {GoogleLogin} from 'react-google-login';
import AdminSrcPage from './AdminSrcPage';
import { borders } from '@material-ui/system';
import {UserPool} from './userPool'
import {Account, AccountContext } from './Accounts'
import DatabaseAPI from './DatabaseAPI'
import {Auth} from 'aws-amplify'

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    async function onSubmit (e) {
        e.preventDefault();
        try {
            const user = await Auth.signIn(email, password);
            history.push('/displayMyFiles')
        }
        catch(err){
            console.log(err)
            alert(err.message)
        }
      
    }
    

    return (
        <>
            {/* <Container align = "center">
            <Form onSubmit ={onSubmit}>
            <FormGroup>
            <GoogleLogin
                clientId="270820257360-nsqo8lpi97bnnpd5bq3ea3bnjdbph74v.apps.googleusercontent.com"
                buttonText="Google Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'} />
                </FormGroup>
            </Form> 
            </Container> */}
            {/* <br/>
            <div align ="center" className="text-white">------------- OR -------------</div>
            <br/> */}
            <Card className = 'bg-dark text-white'>
            <Form>
            <Card.Body>
            <Form.Row>
            <Form.Group as={Col} md={7} controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange= {event=>setEmail(event.target.value)}/>
                <Form.Text className="text-muted">
                    Your email will not be shared with anyone else!!
                </Form.Text>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md={7} controlId="formBasicPassword">
                <Form.Label name='Password'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange= {event=>setPassword(event.target.value)}/>
            </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" onClick={onSubmit}> Login</Button>
            <FormGroup>
                <Form.Label column lg={2}>
                <div className="text-white">New User ?</div>
                <Link to={"register"} className="nav-link">Sign up!</Link>
                </Form.Label>
            </FormGroup>
            </Card.Body>
            </Form>
            </Card>
            </>
    
    )
}
export default LoginPage
